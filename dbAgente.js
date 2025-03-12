// dbAgent.js
import { StateGraph, Annotation } from "@langchain/langgraph";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";
import mysql from 'mysql2/promise';

const DBState = Annotation.Root({
  consulta: Annotation(""),
  sql: Annotation(""),
  resultado: Annotation(null),
  error: Annotation(""),
  status: Annotation(""),
  metadata: Annotation({})
});

export class AgenteDB {
  constructor(configDB, claveAPI) {
    this.configDB = configDB;
    this.modelo = new ChatGoogleGenerativeAI({
      apiKey: claveAPI,
      modelName: "gemini-2.0-flash-exp"
    });
    this.pool = null;
    this.metadatos = null;
  }

  async conectar() {
    try {
      this.pool = mysql.createPool(this.configDB);
      this.metadatos = await this.actualizarMetadatos();
      this.grafo = this.construirGrafo();
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.error('Error al conectar:', error);
      throw error;
    }
  }

  async actualizarMetadatos() {
    let conexion;
    try {
      conexion = await this.pool.getConnection();
      const metadatos = { tablas: {} };

      const [tablas] = await conexion.query(
        `SELECT TABLE_NAME, TABLE_COMMENT 
         FROM information_schema.tables 
         WHERE table_schema = ?`,
        [this.configDB.database]
      );

      for (const tabla of tablas) {
        const nombreTabla = tabla.TABLE_NAME;

        const [columnas] = await conexion.query(
          `SELECT COLUMN_NAME, DATA_TYPE, COLUMN_COMMENT, IS_NULLABLE, COLUMN_KEY, COLUMN_DEFAULT
           FROM information_schema.columns 
           WHERE table_schema = ? AND table_name = ?
           ORDER BY ORDINAL_POSITION`,
          [this.configDB.database, nombreTabla]
        );

        const [relaciones] = await conexion.query(
          `SELECT COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME 
           FROM information_schema.key_column_usage 
           WHERE table_schema = ? AND table_name = ? AND REFERENCED_TABLE_NAME IS NOT NULL`,
          [this.configDB.database, nombreTabla]
        );

        metadatos.tablas[nombreTabla] = {
          comentario: tabla.TABLE_COMMENT,
          columnas: columnas.map(col => ({
            nombre: col.COLUMN_NAME,
            tipo: col.DATA_TYPE,
            comentario: col.COLUMN_COMMENT,
            esNullable: col.IS_NULLABLE === 'YES',
            esPrimaria: col.COLUMN_KEY === 'PRI',
            valorDefecto: col.COLUMN_DEFAULT
          })),
          relaciones: relaciones.map(rel => ({
            columna: rel.COLUMN_NAME,
            tablaReferenciada: rel.REFERENCED_TABLE_NAME,
            columnaReferenciada: rel.REFERENCED_COLUMN_NAME
          }))
        };
      }

      return metadatos;
    } finally {
      if (conexion) conexion.release();
    }
  }

  construirGrafo() {
    const generarSQL = async (estado) => {
      if (!estado.consulta) return { error: "Consulta vacía", status: "error" };

      try {
        const prompt = this.generarPrompt(estado.consulta);
        const resultado = await this.modelo.invoke([new HumanMessage(prompt)]);
        const sql = this.limpiarSQL(resultado.content);

        return {
          sql,
          status: "sql_generado"
        };
      } catch (error) {
        return {
          error: `Error generando SQL: ${error.message}`,
          status: "error"
        };
      }
    };

    const ejecutarSQL = async (estado) => {
      try {
        if (!this.validarConsulta(estado.sql)) {
          throw new Error("Consulta SQL no válida");
        }

        const conexion = await this.pool.getConnection();
        try {
          const [resultados] = await conexion.query(estado.sql);
          return {
            resultado: resultados,
            status: "completado"
          };
        } finally {
          conexion.release();
        }
      } catch (error) {
        return {
          error: `Error ejecutando SQL: ${error.message}`,
          status: "error"
        };
      }
    };

    const grafo = new StateGraph(DBState)
      .addNode("generar_sql", generarSQL)
      .addNode("ejecutar_sql", ejecutarSQL)
      .addEdge("generar_sql", "ejecutar_sql", (x) => x.status === "sql_generado")
      .addEdge("ejecutar_sql", "__end__", (x) => x.status === "completado" || x.status === "error")
      .setEntryPoint("generar_sql");

    return grafo.compile();
  }

  generarPrompt(textoUsuario) {
    if (!this.metadatos) throw new Error("Metadatos no disponibles");

    const estructuraDB = Object.entries(this.metadatos.tablas)
      .map(([nombreTabla, info]) => {
        const columnas = info.columnas
          .map(col => {
            let desc = `${col.nombre} (${col.tipo}`;
            if (col.esPrimaria) desc += ', PRIMARY KEY';
            if (!col.esNullable) desc += ', NOT NULL';
            desc += ')';
            if (col.comentario) desc += ` - ${col.comentario}`;
            return desc;
          })
          .join('\n    ');

        const relaciones = info.relaciones
          .map(rel => `    → ${rel.columna} referencia a ${rel.tablaReferenciada}(${rel.columnaReferenciada})`)
          .join('\n');

        return `Tabla ${nombreTabla}:${info.comentario ? ` (${info.comentario})` : ''}
    ${columnas}
    ${relaciones}`;
      })
      .join('\n\n');

    return `
    Actúa como un experto en SQL que convierte lenguaje natural a consultas SQL válidas.
    Base de datos: ${this.configDB.database}

    Estructura completa de la base de datos:
    ${estructuraDB}

    La consulta en lenguaje natural es: ${textoUsuario}

    Instrucciones:
    1. Genera UNA SOLA consulta SQL válida para MySQL
    2. No uses punto y coma al final
    3. Usa las relaciones entre tablas cuando sea necesario
    4. Para búsquedas por texto usa LIKE con LOWER() para ignorar mayúsculas/minúsculas
    5. Puedes usar funciones de agregación (COUNT, AVG, SUM, etc.) cuando sea apropiado
    6. Considera usar JOIN cuando necesites datos de múltiples tablas
    7. Si necesitas ordenar resultados, usa ORDER BY
    8. Si necesitas limitar resultados, usa LIMIT

    Genera solo la consulta SQL:`;
  }

  limpiarSQL(sql) {
    return sql.trim().split(';')[0];
  }

  validarConsulta(consulta) {
    if (!consulta) return false;
    const consultaLower = consulta.toLowerCase();
    if (consultaLower.includes(';')) return false;
    const comandosProhibidos = [];
    return !comandosProhibidos.some(cmd => consultaLower.includes(cmd));
  }

  async procesarConsulta(textoUsuario) {
    if (!this.grafo) throw new Error("Grafo no inicializado");

    try {
      const resultado = await this.grafo.invoke({
        consulta: textoUsuario,
        status: "inicio",
        metadata: this.metadatos
      });

      if (resultado.error) {
        return {
          error: resultado.error,
          sugerencia: 'Intenta reformular tu consulta.'
        };
      }

      return {
        resultado: resultado.resultado,
        sql_generado: resultado.sql
      };
    } catch (error) {
      return {
        error: error.message,
        sugerencia: 'Error en el sistema. Intenta nuevamente.'
      };
    }
  }
}
// server.js
import { AgenteDB } from './dbAgente.js';

const configDB = {
  host: process.env.DB_HOST || 'localhost',//host de la base de datos
  user: process.env.DB_USER || 'root', //usuario de la base de datos
  password: process.env.DB_PASSWORD || '', //contraseña de la base de datos
  database: process.env.DB_DATABASE || 'proyecto', //nombre de la base de datos
  waitForConnections: true, 
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
};

const agente = new AgenteDB(configDB, process.env.GOOGLE_API_KEY);

async function iniciarServidor() {
  try {
    await agente.conectar();

    const server = Bun.serve({
      port: process.env.PORT || 3000,
      async fetch(req, server) {
        const url = new URL(req.url);

        if (url.pathname === "/ws") {
          if (server.upgrade(req)) return;
          return new Response("WebSocket upgrade failed", { status: 400 });
        }

        if (url.pathname === "/" || url.pathname === "/index.html") {
          const html = await Bun.file("index.html").text();
          return new Response(html, {
            headers: { "Content-Type": "text/html" },
          });
        }

        return new Response("Not found", { status: 404 });
      },
      websocket: {
        async message(ws, mensaje) {
          try {
            const { consulta } = JSON.parse(mensaje);
            if (consulta) {
              const resultado = await agente.procesarConsulta(consulta);
              ws.send(JSON.stringify(resultado));
            }
          } catch (error) {
            ws.send(JSON.stringify({
              error: 'Error procesando consulta',
              sugerencia: 'Verifica la sintaxis de tu consulta'
            }));
          }
        },
        open(ws) {
          console.log('Nueva conexión WebSocket establecida');
        },
        close(ws, code, message) {
          console.log('Conexión WebSocket cerrada:', code, message);
        },
        maxPayloadLength: 16 * 1024 * 1024,
        idleTimeout: 120,
        compression: true,
      }
    });

    console.log(`Servidor iniciado en el puerto ${server.port}`);

  } catch (error) {
    console.error('Error iniciando el servidor:', error);
    process.exit(1);
  }
}

iniciarServidor();
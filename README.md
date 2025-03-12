# BaseDatosChat

<div align="center">
  
![BaseDatosChat](https://img.shields.io/badge/BaseDatosChat-1.0.0-black)
![Bun](https://img.shields.io/badge/Bun-1.0.17+-FFD700)
![LangGraph](https://img.shields.io/badge/LangGraph-0.0.30-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

<div align="center">
  <strong>Natural language to SQL conversion powered by AI</strong><br>
  A modern database assistant that translates natural language into SQL queries
</div>

<br>

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=BaseDatosChat+Screenshot" alt="BaseDatosChat Screenshot" width="80%"/>
</div>

## 🌟 Overview

**BaseDatosChat** is an advanced database interaction system that allows users to query MySQL databases using natural language. Built with Bun.js, LangGraph, and WebSockets, it provides real-time SQL generation and query execution with a smooth, modern interface.

## ✨ Features

- 🤖 **AI-Powered SQL Generation**: Translate natural language questions into optimized SQL queries
- 🔄 **Real-time Processing**: WebSocket connections for immediate responses
- 📊 **Dynamic Results Visualization**: Clean presentation of query results
- 🔍 **Database Schema Understanding**: Automatically maps your database structure for accurate queries
- 🛡️ **Secure Query Validation**: Protection against dangerous SQL operations
- 🌐 **Modern Web Interface**: Built with HTML, JavaScript and Tailwind CSS
- 📱 **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Runtime**: [Bun.js](https://bun.sh/) - Fast JavaScript runtime and package manager
- **Frontend**: HTML, JavaScript and Tailwind CSS
- **AI & LLM**: [Google Gemini API](https://ai.google.dev/) - Advanced language model
- **Orchestration**: [LangGraph](https://github.com/langchain-ai/langgraph) - Framework for building stateful, multi-actor applications with LLMs
- **Database**: [MySQL](https://www.mysql.com/) - Robust relational database
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Communication**: WebSockets - For real-time bi-directional communication

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) 1.0.0 or higher
- MySQL 8.0 or higher
- Google AI API key (for Gemini Pro)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dragon88888888888/BaseDatosChat.git
   cd BaseDatosChat
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up your environment variables**
   ```bash
   # Create a .env file
   touch .env
   
   # Add the following:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_DATABASE=proyecto
   GOOGLE_API_KEY=your_gemini_api_key
   PORT=3000
   ```

4. **Start the server**
   ```bash
   bun run servidor.js
   ```

5. **Access the application**
   ```
   http://localhost:3000
   ```

## 🧠 How LangGraph Works

BaseDatosChat uses LangGraph to orchestrate a multi-step AI workflow:

1. **Schema Analysis**: Automatically extracts and processes database metadata (tables, columns, relationships)
2. **Query Planning**: Translates natural language to a planned SQL query
3. **Execution**: Runs the generated SQL against your database
4. **Response Processing**: Formats the results for presentation

The state machine pattern implemented through LangGraph enables:
- Cleanly separated processing steps
- Error handling at each stage
- Retry capabilities
- Maintenance of context between requests

```
┌─────────────┐     ┌──────────────┐     ┌────────────────┐
│ User Query  │────►│ Generate SQL │────►│ Execute Query  │
└─────────────┘     └──────────────┘     └────────────────┘
                           │                      │
                           │                      │
                           ▼                      ▼
                    ┌────────────┐         ┌────────────┐
                    │   Error    │◄────────│  Success   │
                    │  Handling  │         │  Response  │
                    └────────────┘         └────────────┘
```

## 🔧 Configuration

### Database Configuration
Edit the `configDB` object in `servidor.js` to match your MySQL setup:

```javascript
const configDB = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'proyecto',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
};
```

### LLM Configuration
BaseDatosChat uses the Google Generative AI (Gemini) model. Set your API key in the `.env` file.

## 📖 Usage

1. Type a natural language query in the input field, such as:
   - "Show me all tables in the database"
   - "Find monuments in Mexico"
   - "What are the oldest monuments?"

2. The application will:
   - Process your query through the AI model
   - Generate an appropriate SQL query
   - Execute the query against your database
   - Display both the SQL and results

3. You can copy the generated SQL for use in other applications.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## 👤 Author

Developed by **Jesús Martínez García** ([dragon88888888888](https://github.com/dragon88888888888)).

---

# BaseDatosChat (English Version)

<div align="center">
  
![BaseDatosChat](https://img.shields.io/badge/BaseDatosChat-1.0.0-black)
![Bun](https://img.shields.io/badge/Bun-1.0.17+-FFD700)
![LangGraph](https://img.shields.io/badge/LangGraph-0.0.30-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

<div align="center">
  <strong>Natural language to SQL conversion powered by AI</strong><br>
  A modern database assistant that translates natural language into SQL queries
</div>

<br>

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=BaseDatosChat+Screenshot" alt="BaseDatosChat Screenshot" width="80%"/>
</div>

## 🌟 Overview

**BaseDatosChat** is an advanced database interaction system that allows users to query MySQL databases using natural language. Built with Bun.js, LangGraph, and WebSockets, it provides real-time SQL generation and query execution with a smooth, modern interface.

## ✨ Features

- 🤖 **AI-Powered SQL Generation**: Translate natural language questions into optimized SQL queries
- 🔄 **Real-time Processing**: WebSocket connections for immediate responses
- 📊 **Dynamic Results Visualization**: Clean presentation of query results
- 🔍 **Database Schema Understanding**: Automatically maps your database structure for accurate queries
- 🛡️ **Secure Query Validation**: Protection against dangerous SQL operations
- 🌐 **Modern Web Interface**: Built with HTML, JavaScript and Tailwind CSS
- 📱 **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Runtime**: [Bun.js](https://bun.sh/) - Fast JavaScript runtime and package manager
- **Frontend**: HTML, JavaScript and Tailwind CSS
- **AI & LLM**: [Google Gemini API](https://ai.google.dev/) - Advanced language model
- **Orchestration**: [LangGraph](https://github.com/langchain-ai/langgraph) - Framework for building stateful, multi-actor applications with LLMs
- **Database**: [MySQL](https://www.mysql.com/) - Robust relational database
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Communication**: WebSockets - For real-time bi-directional communication

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) 1.0.0 or higher
- MySQL 8.0 or higher
- Google AI API key (for Gemini Pro)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dragon88888888888/BaseDatosChat.git
   cd BaseDatosChat
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up your environment variables**
   ```bash
   # Create a .env file
   touch .env
   
   # Add the following:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_DATABASE=proyecto
   GOOGLE_API_KEY=your_gemini_api_key
   PORT=3000
   ```

4. **Start the server**
   ```bash
   bun run servidor.js
   ```

5. **Access the application**
   ```
   http://localhost:3000
   ```

## 🧠 How LangGraph Works

BaseDatosChat uses LangGraph to orchestrate a multi-step AI workflow:

1. **Schema Analysis**: Automatically extracts and processes database metadata (tables, columns, relationships)
2. **Query Planning**: Translates natural language to a planned SQL query
3. **Execution**: Runs the generated SQL against your database
4. **Response Processing**: Formats the results for presentation

The state machine pattern implemented through LangGraph enables:
- Cleanly separated processing steps
- Error handling at each stage
- Retry capabilities
- Maintenance of context between requests

```
┌─────────────┐     ┌──────────────┐     ┌────────────────┐
│ User Query  │────►│ Generate SQL │────►│ Execute Query  │
└─────────────┘     └──────────────┘     └────────────────┘
                           │                      │
                           │                      │
                           ▼                      ▼
                    ┌────────────┐         ┌────────────┐
                    │   Error    │◄────────│  Success   │
                    │  Handling  │         │  Response  │
                    └────────────┘         └────────────┘
```

## 🔧 Configuration

### Database Configuration
Edit the `configDB` object in `servidor.js` to match your MySQL setup:

```javascript
const configDB = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'proyecto',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
};
```

### LLM Configuration
BaseDatosChat uses the Google Generative AI (Gemini) model. Set your API key in the `.env` file.

## 📖 Usage

1. Enter a natural language query in the input field depending on your database, such as:
   - "Show me all tables in the database"
   - "Find monuments in Mexico"
   - "What are the oldest monuments?"

2. The application will:
   - Process your query through the AI model
   - Generate an appropriate SQL query
   - Execute the query against your database
   - Display both the SQL and results

3. You can copy the generated SQL for use in other applications.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## 👤 Author

Developed by **Jesús Martínez García** ([dragon88888888888](https://github.com/dragon88888888888)).

---

# BaseDatosChat (Versión en Español)

<div align="center">
  
![BaseDatosChat](https://img.shields.io/badge/BaseDatosChat-1.0.0-black)
![Bun](https://img.shields.io/badge/Bun-1.0.17+-FFD700)
![LangGraph](https://img.shields.io/badge/LangGraph-0.0.30-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

<div align="center">
  <strong>Conversión de lenguaje natural a SQL potenciada por IA</strong><br>
  Un asistente moderno de base de datos que traduce lenguaje natural a consultas SQL
</div>

<br>

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=BaseDatosChat+Screenshot" alt="BaseDatosChat Screenshot" width="80%"/>
</div>

## 🌟 Descripción General

**BaseDatosChat** es un sistema avanzado de interacción con bases de datos que permite a los usuarios consultar bases de datos MySQL utilizando lenguaje natural. Construido con Bun.js, LangGraph y WebSockets, proporciona generación de SQL y ejecución de consultas en tiempo real con una interfaz moderna y fluida.

## ✨ Características

- 🤖 **Generación de SQL con IA**: Traduce preguntas en lenguaje natural a consultas SQL optimizadas
- 🔄 **Procesamiento en tiempo real**: Conexiones WebSocket para respuestas inmediatas
- 📊 **Visualización dinámica de resultados**: Presentación clara de los resultados de las consultas
- 🔍 **Comprensión del esquema de base de datos**: Mapea automáticamente la estructura de tu base de datos para consultas precisas
- 🛡️ **Validación segura de consultas**: Protección contra operaciones SQL peligrosas
- 🌐 **Interfaz web moderna**: Construida con HTML, JavaScript y Tailwind CSS
- 📱 **Diseño responsivo**: Funciona en dispositivos de escritorio y móviles

## 🛠️ Tecnologías Utilizadas

- **Entorno de ejecución**: [Bun.js](https://bun.sh/) - Runtime y gestor de paquetes JavaScript rápido
- **Frontend**: HTML, JavaScript y Tailwind CSS
- **IA & LLM**: [Google Gemini API](https://ai.google.dev/) - Modelo de lenguaje avanzado
- **Orquestación**: [LangGraph](https://github.com/langchain-ai/langgraph) - Framework para construir aplicaciones multiactor con estado utilizando LLMs
- **Base de datos**: [MySQL](https://www.mysql.com/) - Base de datos relacional robusta
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- **Comunicación**: WebSockets - Para comunicación bidireccional en tiempo real

## 🚀 Comenzando

### Requisitos previos

- [Bun](https://bun.sh/) 1.0.0 o superior
- MySQL 8.0 o superior
- Clave API de Google AI (para Gemini Pro)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/dragon88888888888/BaseDatosChat.git
   cd BaseDatosChat
   ```

2. **Instalar dependencias**
   ```bash
   bun install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear un archivo .env
   touch .env
   
   # Añadir lo siguiente:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   DB_DATABASE=proyecto
   GOOGLE_API_KEY=tu_clave_api_gemini
   PORT=3000
   ```

4. **Iniciar el servidor**
   ```bash
   bun run servidor.js
   ```

5. **Acceder a la aplicación**
   ```
   http://localhost:3000
   ```

## 🧠 Cómo funciona LangGraph

BaseDatosChat utiliza LangGraph para orquestar un flujo de trabajo de IA de múltiples pasos:

1. **Análisis de esquema**: Extrae y procesa automáticamente los metadatos de la base de datos (tablas, columnas, relaciones)
2. **Planificación de consultas**: Traduce el lenguaje natural a una consulta SQL planificada
3. **Ejecución**: Ejecuta el SQL generado contra tu base de datos
4. **Procesamiento de respuesta**: Formatea los resultados para su presentación

El patrón de máquina de estados implementado a través de LangGraph permite:
- Pasos de procesamiento claramente separados
- Manejo de errores en cada etapa
- Capacidades de reintento
- Mantenimiento de contexto entre solicitudes

```
┌─────────────┐     ┌──────────────┐     ┌────────────────┐
│ Consulta    │────►│ Generar SQL  │────►│ Ejecutar       │
│ Usuario     │     │              │     │ Consulta       │
└─────────────┘     └──────────────┘     └────────────────┘
                           │                      │
                           │                      │
                           ▼                      ▼
                    ┌────────────┐         ┌────────────┐
                    │   Manejo   │◄────────│  Respuesta │
                    │  de Error  │         │  Exitosa   │
                    └────────────┘         └────────────┘
```

## 🔧 Configuración

### Configuración de la Base de Datos
Edita el objeto `configDB` en `servidor.js` para que coincida con tu configuración de MySQL:

```javascript
const configDB = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'proyecto',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
};
```

### Configuración del LLM
BaseDatosChat utiliza el modelo Google Generative AI (Gemini). Configura tu clave API en el archivo `.env`.

## 📖 Uso

1. Escribe una consulta en lenguaje natural en el campo de entrada, dependiendo de tu Base de Datos, como:
   - "Muestra todas las tablas de la base de datos"
   - "Buscar monumentos en México"
   - "¿Cuáles son los monumentos más antiguos?"

2. La aplicación:
   - Procesará tu consulta a través del modelo de IA
   - Generará una consulta SQL apropiada
   - Ejecutará la consulta contra tu base de datos
   - Mostrará tanto el SQL como los resultados

3. Puedes copiar el SQL generado para usarlo en otras aplicaciones.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor, siéntete libre de enviar un Pull Request.

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/caracteristica-asombrosa`)
3. Confirma tus cambios (`git commit -m 'Añadir alguna característica asombrosa'`)
4. Empuja a la rama (`git push origin feature/caracteristica-asombrosa`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo `LICENSE` para más detalles.

## 👤 Autor

Desarrollado por **Jesús Martínez García** ([dragon88888888888](https://github.com/dragon88888888888)).
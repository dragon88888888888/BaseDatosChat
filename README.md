#  BaseDatosChat

## Descripción
**BaseDatosChat** es un sistema avanzado de gestión de bases de datos MySQL con interacción en tiempo real, diseñado para mejorar la comunicación en aplicaciones web como chats y dashboards. Utiliza **Langraph**, **Vue.js**, **WebSockets** y **MySQL** para proporcionar una experiencia fluida y dinámica.

## ✨ Características
- 🔹 **Base de datos MySQL**: Almacenamiento estructurado y optimizado de mensajes y usuarios.
- 🔹 **Langraph + AI**: Generación automática de consultas SQL con procesamiento de lenguaje natural.
- 🔹 **Interacción en tiempo real**: WebSockets para respuestas instantáneas sin necesidad de recargar la página.
- 🔹 **Frontend dinámico**: Interfaz moderna y atractiva con **Vue.js** y **TailwindCSS**.
- 🔹 **Soporte para múltiples aplicaciones**: Integración con chat, dashboard y herramientas de análisis.

## 📦 Requisitos
- 🔧 XAMPP instalado (incluye Apache, MySQL y PHP).
- 🐬 MySQL configurado y ejecutándose en el servidor.
- 💻 Editor de código (Visual Studio Code, Sublime Text, etc.).
- 🌐 Navegador web para probar la interfaz de usuario.

## ⚙️ Instalación
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/dragon88888888888/BaseDatosChat.git
   ```
2. **Configurar la base de datos:**
   - Abrir **phpMyAdmin** desde `http://localhost/phpmyadmin`.
   - Crear una nueva base de datos llamada `proyecto`.
   - Importar el archivo `database.sql` incluido en el repositorio.
3. **Configurar las credenciales en `servidor.js`**:
   ```js
   const configDB = {
       host: 'localhost',
       user: 'root',
       password: '',
       database: 'proyecto',
   };
   ```
4. **Instalar dependencias:**
   ```bash
   npm install
   ```
5. **Iniciar el servidor:**
   ```bash
   npm start
   ```
6. **Acceder a la aplicación:**
   - Navegar a `http://localhost:3000`

## Uso
- **Consulta SQL en lenguaje natural**: Describe tu consulta y el sistema generará el SQL adecuado.
- **Ver resultados en tiempo real**: La respuesta de la base de datos se muestra inmediatamente en la interfaz.
- **Copiar y ejecutar consultas**: Permite copiar la consulta SQL generada y ejecutarla manualmente.

## Contribuciones
Las contribuciones son bienvenidas. Para contribuir:
1. **Haz un fork** del repositorio.
2. **Crea una nueva rama** con tu mejora o corrección.
3. **Envía un pull request** detallando los cambios realizados.

## Licencia
Este proyecto está bajo la **licencia MIT**. Consulta el archivo `LICENSE` para más detalles.

## Autor
Desarrollado por **Jesús Martínez García** ([dragon88888888888](https://github.com/dragon88888888888)).


# API de Usuarios

Este proyecto es una API simple para gestionar usuarios utilizando Node.js, Express y MongoDB.

## Descripción

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en una colección de usuarios. Está diseñada para facilitar la gestión de datos de usuario, incluyendo su nombre y apellido.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript en el servidor.
- **Express**: Framework de Node.js para construir aplicaciones web.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar datos.
- **Mongoose**: Biblioteca de modelado de objetos MongoDB para Node.js.

## Requisitos

- Node.js
- MongoDB (una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) es recomendada)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/mexaexploit/NodeUserApi.git
   cd api
Instala las dependencias:

bash
Copy code
npm install
Configura tu conexión a MongoDB en los archivos api.js e index.js. Asegúrate de reemplazar username y passwd con tus credenciales de MongoDB.

Inicia el servidor:

bash
Copy code
node api.js
El servidor estará corriendo en http://localhost:3000.

Endpoints
GET /: Devuelve un saludo al usuario.
POST /: Crea un nuevo usuario.
GET /: Devuelve la lista de usuarios.
PUT /: Actualiza un usuario existente.
PATCH /: Actualiza parcialmente un usuario.
DELETE /: Elimina un usuario.
Uso con Postman
Puedes probar la API utilizando Postman o cualquier otra herramienta de cliente HTTP. Asegúrate de configurar el tipo de solicitud HTTP correcto (GET, POST, PUT, PATCH, DELETE) según lo que necesites.

Estructura del Proyecto
api.js: Archivo principal que configura el servidor y las rutas.
index.js: Archivo que contiene la definición del modelo de usuario y operaciones CRUD.
user.controller.js: Controlador que maneja las solicitudes de los usuarios.
User.js: Modelo de datos para los usuarios.
Archivos JSON
package.json: Contiene información del proyecto y dependencias.
package-lock.json: Asegura que se instalen las versiones correctas de las dependencias.

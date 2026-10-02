## Sistema de Formularios y inspecciones

1. Gestion de Formularios 
  Permite crear formularios compuestos por Categorías y Preguntas.

  Cada pregunta admite opcionalmente 1 imagen adjunta mediante una URL.

  Sistema de Revisiones (revision + 1)


2. Registro y evaluaciones de Inspecciones 
  Permite registrar las respuestas de un inspector asociadas a un formulario específico.

  Las respuestas por pregunta admiten únicamente tres estados estrictos: "CUMPLE", "NO_CUMPLE" o "N/A".

  Incluye un endpoint de resumen estadístico por ID de inspección, contabilizando el total de items aprobados, rechazados y no aplicables.  

3. Validaciones 
  Mediante middlewares y esquema de Joi se verifica la validez de las peticiones antes de procesar la lógica en los controladores

##  Instalación y Configuración

1. Clonar e Instalar Dependencias
- npm install

2. Variables de Entorno (.env)
Crea un archivo .env en la raíz del proyecto con la siguiente configuración:

- PORT=3000
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_USER=root
- DB_PASSWORD=
- DB_NAME=tp_formularios


3. Crear Base de Datos MySQL
Ejecuta la creación de la base de datos si aún no existe:

- mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS tp_formularios;"

4. Iniciar la Aplicación
- npm run dev



## Pruebas con postman 

Método: GET

URL: http://localhost:3000/

Respuesta esperada (200 OK):

{
  "mensaje": "API de inspecciones funcionando correctamente"
}


2. Crear Formulario (POST)

Método: POST
URL: http://localhost:3000/formularios
Body (raw -> JSON):

{
  "titulo": "Inspección de Seguridad e Higiene",
  "cabecera": "Control mensual de planta industrial",
  "categorias": [
    {
      "nombre": "Extintores y Salidas de Emergencia",
      "orden": 1,
      "preguntas": [
        {
          "texto": "¿Los matafuegos están vigentes y señalizados?",
          "imagenUrl": "https://ejemplo.com/fotos/matafuego.jpg",
          "orden": 1
        }
      ]
    }
  ]
}

Respuesta esperada 201


3. Obtener Formularios Activos (GET)

Método: GET
URL: http://localhost:3000/formularios
Respuesta esperada 200

4. Obtener Formulario por ID (GET)

Método: GET
URL: http://localhost:3000/formularios/1

Respuesta esperada 200

5. Actualizar Formulario, Generar Nueva Revisión (PUT)

Método: PUT
URL: http://localhost:3000/formularios/1
Body (raw -> JSON):

{
  "titulo": "Inspección de Seguridad e Higiene (Revisada)",
  "cabecera": "Control mensual actualizado de planta industrial",
  "categorias": [
    {
      "nombre": "Extintores, Luces y Salidas de Emergencia",
      "orden": 1,
      "preguntas": [
        {
          "texto": "¿Los matafuegos están vigentes y libres de obstáculos?",
          "orden": 1
        }
      ]
    }
  ]
}


Respuesta esperada 200

6. Registrar una Inspección (POST)

Método: POST
URL: http://localhost:3000/inspecciones
Body (raw -> JSON):

{
  "empresa": "CheckPoint Salud",
  "usuario": "Paula Liel",
  "formularioId": 1,
  "respuestas": [
    {
      "preguntaId": 1,
      "respuesta": "CUMPLE"
    }
  ]
}


Valores permitidos para respuesta: "CUMPLE", "NO_CUMPLE", "N/A".
Respuesta esperada 201 


7. Resumen de Inspección (GET)

Método: GET
URL: http://localhost:3000/inspecciones/1/resumen

Respuesta esperada 200

8. Eliminar Formulario (DELETE)

Método: DELETE
URL: http://localhost:3000/formularios/1

Respuesta esperada 200
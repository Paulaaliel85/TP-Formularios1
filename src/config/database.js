const { DataSource } = require("typeorm");
require("dotenv").config();

// Importamos y desestructuramos los EntitySchema exportados por schema.js
const {
  FormularioEntity,
  CategoriaEntity,
  PreguntaEntity,
  InspeccionEntity,
  RespuestaEntity
} = require("../entities/schema");

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "tp_formularios",
  synchronize: true, // Crea/actualiza tablas automáticamente en desarrollo
  logging: false,
  entities: [
    FormularioEntity,
    CategoriaEntity,
    PreguntaEntity,
    InspeccionEntity,
    RespuestaEntity
  ]
});

module.exports = AppDataSource;
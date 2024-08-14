import { Sequelize } from "sequelize";
require("dotenv").config();

/* console.log("DB:", process.env.POSTGRES_DB);
console.log("User:", process.env.POSTGRES_USER);
console.log("Password:", process.env.POSTGRES_PASSWORD); */

const db = new Sequelize(
  process.env.POSTGRES_DB || "compumobiledb",
  process.env.POSTGRES_USER || "postgres",
  process.env.POSTGRES_PASSWORD || "postgres",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

db.authenticate()
  .then(() => {
    console.log("Conexión exitosa a la base de datos", db.config.database);
  })
  .catch((err: Error) => {
    console.error("No se pudo conectar a la base de datos", err);
  });

export default db;

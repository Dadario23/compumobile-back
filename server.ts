import express from "express";
import db from "./src/config/index";

const app = express();
const serverPort = process.env.SERVER_PORT || 3001;
const cors = require("cors");
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";
const cookieParser = require("cookie-parser");

const routes = require("./src/routes/index").default;
const morgan = require("morgan");

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: corsOrigin, credentials: true }));
app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    server;
  })
  .catch((err: Error) => console.error(err));

// Escuchar en el puerto
const server = app.listen(serverPort, () =>
  console.log(`Servidor levantado en el puerto ${serverPort}`)
);

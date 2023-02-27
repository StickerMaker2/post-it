import express from "express";
import config from "./config/config.json";
import Logger from "./utils/Logger";
import createDatabase from "./Database/DB";
import cors from "cors";

const app = express();
const port = process.env.PORT || config.port;
app.use(cors());

import Imports from "./imports";

app.use(Imports);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

createDatabase();

const server = app.listen(port, () => {
  Logger.INFO(`Iris:Server running on port [${port}]`);
});
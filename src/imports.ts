import ROUTE from "./api/ROUTE/Base";

import express from "express";

const app = express.Router();

app.use([
  ROUTE
]);

export = app;

import AAD from "./api/Accounts/Add";
import AAA from "./api/Accounts/Auth";
import ADD from "./api/Accounts/Delete";

import express from "express";

const app = express.Router();

app.use([AAD, AAA, ADD]);

export = app;

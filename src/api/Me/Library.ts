import express, { Router } from "express";
import User from "../../Database/models/User";
import Logger from "../../utils/Logger";
import Authorize from "../../utils/Authority";
import { Error, ERR_BADAUTH } from "../Errors/Errors";
import { API_BASE } from "../../config/config.json";

const app = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(`${API_BASE}me/library`, async (req, res) => {
  let Authorization = req.headers.authorization;
  Authorization = Authorize(Authorization, res);

  try {
    const user = await User.findOne({ token: Authorization }); // Users are unique and are not expected to have more than one token
    if (!user) {
      return res.status(403).json(Error(ERR_BADAUTH));
    }

    return res.json(JSON.stringify(JSON.parse(user.library))); // Return the user's entire library
  } catch (err: any) {
    try {
      res.sendStatus(400).json({ status: false }); // Bad request
    } catch (e: any) {
      Logger.ERROR(e.toString().substr(0, 100)); // Just briefly see the error
    }
    Logger.ERROR(err.toString().substr(0, 100)); // Just briefly see the error
  }
});

export = app;

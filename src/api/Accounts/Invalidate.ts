import express, { Router } from "express";
import User from "../../Database/models/User";
import Logger from "../../utils/Logger";
import Authorize from "../../utils/Authority";
import { Error, ERR_BADAUTH } from "../Errors/Errors";
import { API_BASE } from "../../config/config.json";
import cryptoRandomString from "crypto-random-string";

const app = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post(`${API_BASE}accounts/invalidate`, async (req, res) => {
  let Authorization = req.headers.authorization;
  Authorization = Authorize(Authorization, res);

  try {
    const user = await User.findOne({ token: Authorization }); // Users are unique and are not expected to have more than one token
    if (!user) {
      return res.status(403).json(Error(ERR_BADAUTH));
    }

    user.token = cryptoRandomString({
      length: 128,
      type: "alphanumeric",
    }); // generate random token if password is correct
    user.save();

    return res.json({
      status: true,
    });
  } catch (err) {
    res.sendStatus(400).json({ status: false }); // Bad request
    Logger.ERROR(err);
  }
});

export = app;

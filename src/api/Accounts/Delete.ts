import express, { Router } from "express";
import bcrypt from "bcryptjs";
import User from "../../Database/models/User";
import Logger from "../../utils/Logger";
import Authorize from "../../utils/Authority";
import { Error, ERR_BADAUTH } from "../Errors/Errors";
import { API_BASE } from "../../config/config.json";

const app = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.delete(`${API_BASE}accounts/delete`, async (req, res) => {
  const { username, password } = req.body;

  let Authorization = req.headers.authorization;
  Authorization = Authorize(Authorization, res);
  
  try {
    const user = await User.findOne({ token: Authorization });

    if (!user) {
      return res.status(403).json(Error(ERR_BADAUTH));
    }
    // Verify
    const password_ = await bcrypt.compare(password, user.password);

    // console.log(
    //   user.username,
    //   username,
    //   user.password,
    //   password_,
    //   user.token,
    //   Authorization
    // );

    if (user.username == username && password_ && user.token == Authorization) {
      User.deleteOne(
        {
          username: username.toString(),
          password: user.password,
          token: Authorization.toString(),
        },
        function (err: any) {
          if (err != null) {
            Logger.WARN(err);
          } else {
            Logger.INFO(
              `[Accounts: OP_DEL] Account ${username} deleted successfully.`
            );
          }
        }
      );
      // user.save();
      return res.json({
        status: true,
      });
    }

    return res.json({
      status: false,
    });
  } catch (err) {
    res.sendStatus(400); // Bad request
    Logger.ERROR(err);
  }
});

export = app;

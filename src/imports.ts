// Account system

import AAD from "./api/Accounts/Add";
import AAA from "./api/Accounts/Auth";
import ADD from "./api/Accounts/Delete";
import AIE from "./api/Accounts/Invalidate";

// // Sticker posting + editing

// import STG from "./api/Stickers/Get";
// import STD from "./api/Stickers/Delete";
// import STM from "./api/Stickers/Modify";
// import STP from "./api/Stickers/Post";

// @Me modifications
import MEG from "./api/Me/Get";
import MEL from "./api/Me/Library";
import MEM from "./api/Me/Modify";
import MEDS from "./api/Me/Delete__SELECTOR";

import express from "express";

const app = express.Router();

app.use([
  // Account system
  AAD,
  AAA,
  ADD,
  AIE,

  // // Sticker posting + editing
  // STG,
  // STD,
  // STM,
  // STP,

  // @Me modifications
  MEG,
  MEL,
  MEM,
  MEDS, // (lol)
]);

export = app;

import mongoose, { Schema } from "mongoose";

const stickerSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    require: true,
    default: "",
  },
  content: {
    type: String,
    require: true,
    default: "",
  },
  saves: {
    type: Number,
    require: true,
    default: 0,
  },
  packID: {
    type: String,
    require: true,
    default: "",
  },
});

export default mongoose.model("Stickers", stickerSchema);

import mongoose, { Schema } from "mongoose";

const stickerSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    required: true,
    default: "",
  },
  content: {
    type: String,
    required: true,
    default: "",
  },
  saves: {
    type: Number,
    required: true,
    default: 0,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  packID: {
    type: String,
    required: true,
    default: "",
  },
});

export default mongoose.model("Stickers", stickerSchema);

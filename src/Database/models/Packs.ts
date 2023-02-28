import mongoose, { Schema } from "mongoose";

const stickerSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
  },
  artistName: {
    type: String,
    required: true,
    default: "Unknown",
  },
  packName: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  stickers: { // Holds the stickers by ID
    type: Array,
    required: false,
  },
});

export default mongoose.model("Stickers", stickerSchema);

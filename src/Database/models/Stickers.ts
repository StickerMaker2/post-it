import mongoose, { Schema } from "mongoose";

const stickerSchema = new Schema({
  packageID: {
    // Which package does this sticker belong to?
    type: String,
    required: true,
    default: "",
  },
  stickerId: { // Identifier
    type: Number,
    required: true,
    unique: true,
  },
  stickerName: {
    type: String,
    required: true,
    default: "",
  },
  stickerDesc: {
    type: String,
    default: "",
  },
  stickerArtist: {
    type: String,
    required: true,
    default: "",
  },
  stickerContent: {
    // Array of image links of different sizes / resolutions
    /* Example:
  [ // size is in pixels
    "https://img.stickermaker.io/25.png"
    "https://img.stickermaker.io/128.png"
    "https://img.stickermaker.io/258.png"
    "https://img.stickermaker.io/512.png"
  ]  */
    type: Array,
    required: true,
    default: [],
  },
  stickerSaves: {
    type: Number,
    required: true,
    default: 0,
  },
  stickerThumbnail: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Stickers", stickerSchema);

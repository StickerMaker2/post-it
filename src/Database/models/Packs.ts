import mongoose, { Schema } from "mongoose";

const stickerSchema = new Schema({
  packageId: {
    // Is what "links" (or, appropriately put, **identifies**) the
    // stickers to the package by its ID
    type: Number,
    required: true,
    unique: true,
  },
  artistName: {
    type: String,
    required: true,
    default: "Unknown",
  },
  packageName: {
    type: String,
    required: true,
  },
  packageThumbnail: {
    type: String,
    required: false,
  },
  stickers: {
    // Holds the stickers by ID
    type: Array,
    required: false,
  },
});

export default mongoose.model("Stickers", stickerSchema);

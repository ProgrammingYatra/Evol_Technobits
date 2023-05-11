const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  likes: {
    type: Number,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Image", uploadSchema);

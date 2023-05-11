const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    file: {
      type: String,
      required: [true, "Please Provide a File"],
    },
    likes: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", uploadSchema);

const express = require("express");
const multer = require("multer");
const UploadImg = require("./routes/imgRoute");
const ErrorHandler = require("./middlewares/error");
const cors = require("cors");
const app = express();

app.use(express.json());
const upload = multer();
app.use(upload.any());
app.use(cors());

app.use(UploadImg);

app.use(ErrorHandler);
module.exports = app;

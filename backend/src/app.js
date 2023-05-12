const express = require("express");
const multer = require("multer");

const UploadImg = require("./routes/imgRoute");
const User = require("./routes/userRoute");
const ErrorHandler = require("./middlewares/error");

const cors = require("cors");
const cookie=require("cookie-parser")
const app = express();

app.use(express.json());
const upload = multer();
app.use(upload.any());
app.use(cors());
app.use(cookie())

app.use(UploadImg);
app.use(User);

app.use(ErrorHandler);
module.exports = app;

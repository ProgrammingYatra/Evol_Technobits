const express = require("express");
const multer = require("multer");

const ErrorHandler = require("./middlewares/error");
const app = express();

app.use(express.json());
const upload = multer();
app.use(upload.any());


app.use(ErrorHandler);
module.exports = app;

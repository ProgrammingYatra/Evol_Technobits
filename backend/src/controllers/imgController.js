const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const upload = require("../models/imgModel");
const aws = require("../Aws/aws.js");

exports.uploadImg = catchAsyncError(async (req, res, next) => {
  const { likes } = req.body;
  const files = req.files;
  if (!files) {
    return next(new ErrorHandler("Please Provide a Profile Image", 400));
  }
  let img = await aws.uploadFile(files[0]);
  const uploaded = await upload.create({
    likes,
    img,
  });
  return res.status(201).json({ success: true, post: uploaded });
});

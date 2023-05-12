const express=require("express");
const { uploadImg, getImage } = require("../controllers/imgController");
const  router=express.Router();

router.route("/api/upload").post(uploadImg)
router.route("/api/images").get(getImage)

module.exports=router;
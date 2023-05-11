const express=require("express");
const { uploadImg } = require("../controllers/imgController");
const  router=express.Router();

router.route("/api/upload").post(uploadImg)

module.exports=router;
const express=require("express");
const { loginUser, logout } = require("../controllers/userController");
const  router=express.Router();

router.route("/api/login").post(loginUser)
router.route("/api/logout").post(logout)

module.exports=router;
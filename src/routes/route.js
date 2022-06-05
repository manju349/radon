const express = require('express');
const router = express.Router();

const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.post("/createBooks", UserController.createBook)
router.get("/getBookDatas", UserController.getBookData)

module.exports = router;


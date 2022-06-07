const express = require('express');
const router = express.Router();

const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.post("/createBooks", UserController.createBook)
router.get("/getBookDatas", UserController.getBookData)
router.get("/bookList", UserController.bookList)

router.post("/getBooksInYear", UserController.getBooksInYear)
router.post("/getParticularBooks", UserController.getParticularBooks)
router.get("/getXINRBooks", UserController.getXINRBooks)
router.get("/getRandomBooks", UserController.getRandomBooks)


module.exports = router;


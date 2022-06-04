const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

const UserModel1=require("../models/userModel1")
const BooksController=require("../controllers/booksController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBooks", BooksController.createBook)
router.post("/getBookDatas", BooksController.getBookData)

module.exports = router;
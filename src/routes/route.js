const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

const UserModel1=require("../models/userModel1");
const BooksController=require("../controllers/booksController");

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBooks", BooksController.createBook)
router.get("/getBookDatas", BooksController.getBookData)

//.....................................................................
































const express=require('express')
const router=express.Router()
const userModel1=require("../models/userModel1")
cosnt booksController=require("../controllers/booksController")

route.post("/createBooks", booksController.createBook)
route.post("/getBooks", booksController.getBookData)

const express=require('express')
const router=express.Router()


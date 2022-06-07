const express = require('express');
const router = express.Router();

const booksController= require("../controllers/userController")
// const authorModel= require("../models/authorModel")
// const booksModel=require("../models/booksModel")


router.post("/createBook", booksController.createBook)
router.post("/createAuthor", booksController.createAuthor)

router.get("/getBooksbyChetanBhagat", booksController.getBooksbyChetanBhagat)
router.get("/authorBook", booksController.authorBook)
router.get("/getfinalbooklist", booksController.findBook)


module.exports = router;


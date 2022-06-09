const express = require('express');
const router = express.Router();
const Controller=require("../controllers/Controller")


router.post("/createAuthor", Controller.createAuthor  )
router.post("/createPublisher",Controller.createPublisher)
router.post("/createBook",Controller.createBook)
router.get("/getAllBooks", Controller.getAllBooks)

router.post("/createPublisher2", Controller.createPublisher2)


module.exports = router;
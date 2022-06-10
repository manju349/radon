const express = require('express');
const router = express.Router();
const Controller=require("../controllers/Controller")
const moment=require('moment')

router.post("/createAuthor", Controller.createAuthor  )
router.post("/createPublisher",Controller.createPublisher)
router.post("/createBook",Controller.createBook)
router.get("/getAllBooks", Controller.getAllBooks)

router.post("/createPublisher2", Controller.createPublisher2)
router.post("/updateBooks", Controller.updateBooks)
router.post("/updateBooks2", Controller.updateBooks2)



router.get("/dateManipulation", Controller.mid1, Controller.mid2, Controller.mid3, Controller.response)

module.exports = router;
const express = require('express');
const router = express.Router();
const Controller=require("../controllers/Controller")
const moment=require('moment')


router.get("/dateManipulation", Controller.mid1, Controller.mid2, Controller.mid3, Controller.response)

module.exports = router;
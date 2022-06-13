const express = require('express');
const router = express.Router();
const controller= require("../controllers/controller")
const orderDocument=require("../models/orderDocument")
const productDocument=require("../models/productDocument")
const userDocument=require("../models/userDocument")
const commonMiddlewares = require ("../middlewares/commonMiddlewares")




router.post("/createOrder", controller.createOrder)
router.post("/createUser", commonMiddlewares.checkIsFreeAppUser, controller.createUser  )
router.post("/createProduct",  controller.createProduct)

module.exports = router;
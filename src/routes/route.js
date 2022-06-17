const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const sorted= require("../controllers/sorted")
const memes = require("../controllers/memes")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/calendarByDate", CowinController.calendarByDate)
router.post("/cowin/getOtp", CowinController.getOtp)


router.get("/weather/getWeather", sorted.getWeather)
router.get("/getSortedCities", sorted.getSortedCities)

router.post("/createMeme", memes.createMeme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;
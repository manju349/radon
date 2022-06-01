const express = require('express');
// const externalModule = require('./logger')
const loggerfolder=require('../logger/logger')
const todayTimeNow=require('../util/helper')
const stringExercise=require('../validator/formatter')


const router = express.Router();
router.get('/test-me', function (req, res) {

    loggerfolder.welcome()

    console.log(todayTimeNow.date);
    console.log(todayTimeNow.nameOfMonth)
    todayTimeNow.getBatchInfo()


    stringExercise.manju()
    stringExercise.lower()
    stringExercise.upper()

    res.send('My first ever api!')
});


module.exports = router;
const mongoose = require('mongoose');

const publisher2schema= new mongoose.Schema({
    bookName: String,
    authorName: String,
    publisherName: String,
    isHardCover:{
        type: Boolean,
        default: false
    },
    ratings: Number
})

module.exports=mongoose.model('publisher2', publisher2schema)
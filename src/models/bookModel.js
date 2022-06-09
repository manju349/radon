const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema({
    name:String,
    author: {

    },
    price: Number,
    ratings: Number,
    publisher: {
        
    }
})



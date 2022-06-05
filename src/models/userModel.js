const mongoose = require('mongoose');

const bookSchema=new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: String,
    Year: Number,

}, {timestamps: true})

module.exports=mongoose.model('Book', bookSchema)
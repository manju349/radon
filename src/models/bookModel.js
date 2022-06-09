const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema({
    name:String,
    author: {
        type: ObjectId,
        ref: "manjuAuthor"
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "manjuPublisher"
    }
})
module.exports=mongoose.model('manjuBook', bookSchema)



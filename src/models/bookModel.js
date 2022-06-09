const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema({
    name:String,
    author: {
        type: ObjectId,
        ref: "manjuAuthor",
        ref: "manjuPublisher"
    },
    price: Number,
    ratings: Number,
    publisher: {
        
    }
})
module.exports=mongoose.model('manjuBook', bookSchema)



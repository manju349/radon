const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    UserName: String,
    balance: Number,
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isFreeAppUser: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema)
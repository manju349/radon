const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createBook=async function (req,res){
    let data=req.body
    let savedBook=await UserModel.create(data)
    res.send({msg: savedBook})
}

const getBookData=async function(req,res){
    let allUsersBook=await UserModel.find()
    res.send({msg: allUsersBook})
}

const bookList=async function(req,res){
    let allBooks=await userModel.find().select({bookName:1, authorName:1, _id:0})  
    res.send({msg: allBooks})
}


const getBooksInYear=async function(req,res){
    let books=req.body.year
    let allBooks=await userModel.find({year:2000}).select({bookName:1, year:1, _id:0})
    res.send({msg: allBooks})
}


const getParticularBooks=async function(req,res){
    let books=req.query.totalPages
    let allUsersBook=await UserModel.find({totalPages:200}).select({bookName:1, totalPages:1, _id:0})
    res.send({msg: allUsersBook})
}

const getXINRBooks=async function(req,res){
    let allBooks=await userModel.find( { $or: [ {indianPrice:"100RS", indianPrice:"200RS", indianPrice:"500RS"} ]  
})
res.send({msg:allBooks})
}

const getRandomBooks=async function(req,res){
    let allBooks=await userModel.find({ stockAvailble: true,totalPages: { $gt:  200 }  })
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBookData= getBookData
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks






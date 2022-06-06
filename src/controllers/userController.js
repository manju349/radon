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

    
}

const getBooksInYear=async function(req,res){

    
}

const getParticularBooks=async function(req,res){

    
}

const getXINRBooks=async function(req,res){

    
}

const getRandomBooks=async function(req,res){

    
}




module.exports.createBook= createBook
module.exports.getBookData= getBookData

module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks






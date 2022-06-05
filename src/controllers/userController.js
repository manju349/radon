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

module.exports.createBook= createBook
module.exports.getBookData= getBookData






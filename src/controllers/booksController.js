const UserModel1=require("../models/userModel1")

const createBook= async function (req, res) {
    let data= req.body
    let savedBook= await UserModel1.create(data)
    res.send({msg: savedBook})
}

const getBookData= async function (req, res) {
    let allUsersBook= await UserModel.find()
    res.send({msg: allUsersBook})
}

module.exports.createBook=createBook
module.exports.getBookData=getBookData
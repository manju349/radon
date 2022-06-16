const jwt=require('jsonwebtoken')
const userModel=require("./models/userModel")

const createUser = function (req,res,next){
    let data=req.body
    let savedData= await userModel.create(data)
    res.send({data: savedData})
}

const loginUser=function (req,res,next){
    let userName=
}
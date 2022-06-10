const { object } = require("webidl-conversions")
const moment=require('moment')



const response=async function(req,res){
    res.send({msg: "task is done"})
   
}

const mid1=async function (req,res,next){
    const today=moment();
    console.log(today.format());
    next()
}

const mid2=async function (req, res, next) {
    console.log(req.ip)
    next();
}

const mid3=async function (req,res,next){
    console.log(req.path)
    next();
}



module.exports.mid3=mid3
module.exports.mid2=mid2
module.exports.response=response
module.exports.mid1=mid1

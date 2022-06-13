const { count } = require("console")
const orderDocument = require("../models/orderDocument")
const productDocument = require("../models/productDocument")
const BookModel = require("../models/productDocument")
const userDocument = require("../models/userDocument")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await userDocument.create(data)
    res.send({msg: savedData})
}

    const createOrder = async function(req,res){
        let data = req.body
        let userId = req.body.userId
        let productId = req.body.productId
        let header = req.headers["isfreeappuser"]
        let Price = await productDocument.find({productId})
        let userValidation  = await userDocument.exists({userId})
        let productValidation = await productDocument.exists({productId})
        if(userValidation){
            if(productValidation){
                let purchase = await orderDocument.create(data)
                if(header == true){
                    await userDocument.findOneAndUpdate({_id : userId},{$set:{balance:`${balance}-${Price}`}},{new:true})
                }
                res.send({success : purchase})
            } else{
                res.send({err: "the product is not present"})}
        }else{
            res.send({alert: "you are not a registered user, please register"})}
    }

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await productDocument.create(data)
    res.send({msg: savedData})
}

module.exports.createUser = createUser
module.exports.createOrder = createOrder
module.exports.createProduct=createProduct






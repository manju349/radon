const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId 

const orderSchema = new mongoose.Schema( {
    userId : {
        type: ObjectId,
        ref: 'user'
    },
    productId: {
        type: ObjectId,
        ref: 'product'
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)



// const createOrder = async function(req,res){
//     let data = req.body
//     let userId = req.body.userId
//     let productId = req.body.productId
//     let header = req.headers["isfreeappuser"]
//     let Price = await productModel.find({productId})
//     let userValidation  = await UserModel.exists({userId})
//     let productValidation = await productModel.exists({productId})
//     if(userValidation){
//         if(productValidation){
//             let purchase = await orderModel.create(data)
//             if(header == true){
//                 await UserModel.find({_id : userId}).update({balance:  `${balance}-${Price}`},{new:true})
//             }
//             res.send({success : purchase})
//         } else{
//             res.send({err: "the product is not present"})}
//     }else{
//         res.send({alert: "you are not a registered user, please register"})}
// }

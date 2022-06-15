const jwt = require("jsonwebtoken");
const userModel=require("../models/userModel")


const authenticate= function ( req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken){
      return res.send({ status: false, msg: "token is invalid" });
    }else {
        next()
      }
}
module.exports.authenticate=authenticate

const authorise = function(req, res, next) {

    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-radon')
    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})


    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = userModel.findById(req.params.userId)
    if(!user) { return res.send({status: false, msg: 'No such user exists'})
    }else{
    next()
    }
}

module.exports.authorise=authorise


const jwt = require("jsonwebtoken");
const userModel=require("../models/userModel")


const authenticate= function ( req, res, next) {
  try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(404).send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken){
      return res.status(400).send({ status: false, msg: "token is invalid" });
    }else {
        next()
      }
    }
    catch (error){
      console.log("Server Error:", error.message)
      res.status(500).send({msg: "Server Error", error: error.message})
    }
}
module.exports.authenticate=authenticate

const authorise = function(req, res, next) {
  try{
    let token = req.headers["x-auth-token"]
    if(!token) return res.status(404).send({status: false, msg: "token not found"})
    let decodedToken = jwt.verify(token, 'functionup-radon')
    if(!decodedToken) return res.status(400).send({status: false, msg:"token is not valid"})


    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.status(401).send({status: false, msg: 'Unauthorised - User logged is not allowed to modify the requested users data'})

    let user = userModel.findById(req.params.userId)
    if(!user) { return res.status(404).send({status: false, msg: 'No such user exists'})
    }else{
    next()
    }
  }
  catch (error){
    console.log("Server Error:", error.message)
    res.status(500).send({msg: "Server Error", error: error.message})
  }
}

module.exports.authorise=authorise


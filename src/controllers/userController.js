const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      // console.log(abcd.newAtribute);
      res.status(201).send({ msg: savedData });
    } else res.send(400).send({ msg: "bad request" })
  }
  catch (error) {
    console.log("Server Error:", error.message)
    res.status(500).send({ msg: "Server Error", error: error.message })
  }
};


const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    if (!userName) {
      res.status(404).send({msg: "email id not found"})
    }
    if (!password){
      res.status(404).send({msg: "password not found"})
    }

   

      let email = await userModel.findOne({emailId: userName})
      if (!email){
        return res.status(404).send({
          status:false,
          msg: "email id is not correct"
        })
      }

      let pass = await userModel.findOne({password: password})
      if (!pass) 
      return res.status(404).send({
        status: false,
        msg: "password is not correct"
      })

      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user)
        return res.status(404).send({
          status: false,
          msg: "both username and the password are not correct",
        });

    let token = jwt.sign({ userId: user._id.toString() }, "functionup-radon");
    if (token){
 // res.setHeader("x-auth-token", token);
 res.status(201).send({ msg:"user successfully logged in",status: true, token: token });
    } else res.send({msg: "UNAUTHORISED"})
   
  }


  catch (error) {
    console.log("Server Error:", error.message)
    res.status(500).send({ msg: "Server Error", error: error.message })
  }
};

const getUserData = async function (req, res) {

  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: userDetails });
  }
  catch (error) {
    console.log("Server Error:", error.message)
    res.status(500).send({ msg: "Server Error", error:error.message })
  }
};


const updateUser = async function (req, res) {

  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({msg:"successfully updated", status: updatedUser, data: updatedUser });
  }
  catch (error) {
    console.log("Server Error:", error.message)
    res.status(500).send({ msg: "Server Error", error: error.message })
  }
};



const deleteUser = async function (req, res) {

  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send("No such user found");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ msg: "successfully deleted",status: updatedUser, data: updatedUser });
  }
  catch (error) {
    console.log("Server Error:", error.message)
    res.status(500).send({ msg: "Server Error", error: error.message })
  }
};


module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;




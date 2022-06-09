const { object } = require("webidl-conversions")
const authorModel= require("../models/authorModel")
const bookModel=require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
const publisherModel2=require("../models/publisherModel2")


const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const createBook= async function (req, res) {
    let book = req.body
    let name= req.body.name
    let publisher=req.body.publisher

    if (Object.keys(req.body).length==0){
        res.send({msg: "this detail is required"})
    }
    if ( !name ){
        res.send({msg:"author detail is required"})
    }
    if(!publisher){
        res.send({msg: "publisher detail is required"})
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getAllBooks=async function(req,res){
   let allBooks= await bookModel.find().populate(["author", "publisher"])
   res.send({data: allBooks})
}


const createPublisher2= async function (req, res) {
    let author = req.body
    let authorCreated = await publisherModel2.create(author)
    res.send({data: authorCreated})
}

const updateBooks=async function (req,res){
    let data=req.body
    let allBooks= await publisherModel2.updateMany(
       $set[ {publisherName:"penguin"[ {isHardCover: true}]},{publisherName:"harper collins"[{isHardCover:true}]}])
        console.log(allBooks)
        res.send({data:allBooks})
    }

const updateBooks2=async function (req,res){
    let data=req.body
    let allBooks=await publisherModel2.find({ratings: {$gt: 50}}).findOneAndUpdate([+10])
    res.send({data:allBooks})
}


module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.createPublisher=createPublisher
module.exports.getAllBooks=getAllBooks

module.exports.createPublisher2=createPublisher2
module.exports.updateBooks=updateBooks
module.exports.updateBooks2=updateBooks2
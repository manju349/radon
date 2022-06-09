const authorModel= require("../models/authorModel")
const bookModel=require("../models/bookModel")
const publisherModel=require("../models/publisherModel")


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
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getAllBooks=async function(req,res){
   let allBooks= await bookModel.find().populate('author')
//    let allBooks1=await bookModel.find().populate('publisher')
   res.send({data: allBooks})
}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }


module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.createPublisher=createPublisher
module.exports.getAllBooks=getAllBooks
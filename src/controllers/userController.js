const res = require("express/lib/response")
const { model } = require("mongoose")
const authorModel = require("../models/authorModel")
const booksModel = require("../models/booksModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedBook = await booksModel.create(data)
    res.send({ msg: savedBook })
}
const createAuthor = async function (req, res) {
    let data = req.body
    let savedAuthor = await authorModel.create(data)
    res.send({ msg: savedAuthor })
}

let getBooksbyChetanBhagat = async function (req, res) {
    let data = await authorModel.findOne({ authorName: "Chetan Bhagat" }).select("author_id")
    let bookData = await booksModel.find({ author_id: data.author_id })
    res.send({ msg: bookData })
}


let authorBook = async function (req, res) {
    let data = await booksModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
    let authorData = await authorModel.find({ author_id: data.author_id }).select("authorName")
    let price = data.price
    res.send({ msg: authorData, price })
}

let findBook = async function (req, res) {
    let data = await booksModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 })
    console.log(data)
    const Id = data.map(inp => inp.author_id)
    console.log(Id)
    let arr=[]
    for (let i = 0; i < Id.length; i++) {
        let j = Id[i]
        console.log(j)
        const author = await authorModel.find({ author_id: j }).select({ authorName: 1, _id: 0 })
        console.log(author)
        arr.push(author)
    }
    const authorData = arr.flat()
    res.send({ msg: authorData })
}


module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBooksbyChetanBhagat = getBooksbyChetanBhagat
module.exports.authorBook = authorBook
module.exports.findBook = findBook







let axios = require("axios")

let getWeather = async function (req,res){
    try{
    let place = req.query.q
    let appid= req.query.appid
    console.log(`query params are: ${place} ${appid}`)
    let options = {
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appid}`
    }
    let result=await axios(options);
    console.log(result)
    res.status(200).send({temperature: result.data.main.temp, city: place})
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}

let getSortedCities = async function (req,res){
    try{
        let cities = [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"  ]
    let cityArray = []
    for (i=0; i<cities.length; i++){
        let obj = {city: cities[i]}
        let resp = await axios.get (`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d1cc4b09f561e2066b9ed28eb6ab374f`)
        console.log(resp.data.main.temp)

        obj.temp=resp.data.main.temp
        cityArray.push(obj)
    }
let sorted = cityArray.sort(function (a,b) {return a.temp - b.temp})
console.log(sorted)
res.status(200).send({status: true, data: sorted})
}
catch (error){
    console.log(error)
    res.status(500).send({status: false, msg:"server errror"})
}
}


module.exports.getWeather=getWeather
module.exports.getSortedCities=getSortedCities
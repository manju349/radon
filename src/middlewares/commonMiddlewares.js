const checkIsFreeAppUser=(req,res,next)=>{
    let data=req.headers
    if(!data.isfreeappuser){
        res.send("request missing for isFreeAppUser in Header")
    }else{
        next()
    }
}

module.exports.checkIsFreeAppUser=checkIsFreeAppUser





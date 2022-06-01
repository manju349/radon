function manju(){
    let a=(  '  manju   ' )
    let b=a.trim()
    console.log(b)
}

module.exports.manju=manju


function lower(){
    let c=('MY NAME IS MANJUNATH, IT WAS IN UPPER CASE')
    let d=c.toLowerCase()
    console.log(d)
    
}

module.exports.lower=lower

function upper(){
    let c=('i am lucky to get selected in functionup, it was in lower case')
    let d=c.toUpperCase()
    console.log(d)
    
}

module.exports.upper=upper

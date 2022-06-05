const express = require('express');
const underscore = require('underscore')
const lodash=require('lodash')

const router = express.Router();

// router.get('/test-me', function (req, res) {

//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// FIRST ASSIGNMENT
router.get('/hello123', function (req,res){
 let a=lodash.chunk(["jan","feb","mar","april","may", "june","july","aug","sep","oct","nov","dec"],3);
console.log(a)
res.send('first wala')
});

router.get('/hello1234', function (req,res){
 let b=lodash.tail([1,3,5,7,9,11,13,15,17,19]);
console.log(b)
res.send('second wala')
});

router.get('/hello12345', function (req,res){
 let c=lodash.union(
     [1,2],[2,3],[3,4,5],[4,5,6],[6,7,8,9]
 );
console.log(c)
res.send('third wala')
});

router.get('/hello123456', function (req,res){
 let d=lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]);
console.log(d)
res.send('fourth wala')
});




router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    // let candidates = ['Akash','Suman']
    res.send("done")
})


// router.get('/candidates/:candidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.candidatesName)
//     res.send('Done')
// })

// router.get('/movies/:moviesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Movies name is '+req.params.moviesName)
//     res.send('Done')
// })

// SECOND ASSIGNMENT
//1
router.get('/movies', function(req, res){
    // console.log('The request objects is '+ JSON.stringify(req.params))
    // console.log('Movies name is '+req.params.moviesName)
    let movies=["‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’"]
    console.log(movies)
    res.send('done')
    
})

//2 & 3
router.get('/movies/:indexNumber', function(req, res){
    let movies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let movieIndex=req.params.indexNumber
    let finalMovie=""
    if(movieIndex<movies.length){
        finalMovie=movies[movieIndex];
    } else {
        finalMovie=("the movie with index no. doesnt exist")
    }
    console.log(movies.length)
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Movies name is '+req.params.moviesName)
    res.send(finalMovie)
})

router.get('/animals/:indexNumber', function(req,res){
    let animals=["cat","dog","lion","cheetah","bear","elephant"]
    let animalsIndex=req.params.indexNumber;
    let animalFinal=""
    if(animalsIndex<animals.length){
        animalFinal=animals[animalsIndex];
    }else{
        animalFinal=('the animal not present')
    }
    console.log(animals.length)
    console.log('the object requested is'+JSON.stringify(req.params))
    console.log('animal name is'+req.params.animalsNames)
    res.send(animalFinal)
})

//4
router.get("/sol2", function(req,res){
    let a= [ {
        id: 1, name: "The Shining"}, 
        { id: 2,name: "Incendies"}, 
        { id: 3, name: "Rang de Basanti"}, 
        {  id: 4,  name: "Finding Nemo"}];

        res.send(a)
    })


//5
router.get('/films/:indexNumber', function(req, res){
    let films=[{
        "id": 1,
        "name": "The Shining"
    },{
        "id": 2,
        "name": "Incedies"
    },{
        "id":3,
        "name":"Rang de Basanti"
    },{
        "id":4,
        "name":"Finding Nemo"
    }]

    let movieIndex=req.params.indexNumber;
    let finalMovie="";
    if(movieIndex<films.length){
        finalMovie=films[movieIndex];
    } else {
        finalMovie=("the movie with index no. doesnt exist")
    }
    console.log(films.length)
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Movies name is '+req.params.moviesName)
    res.send(finalMovie)
})


// ASSIGNMENT 3 - PRITESH SIR
//1
router.get("/solution1", function (req, res) {
var a = [1,2,3,5,6,7], count = a[a.length - 1];
var missing = [];
for ( var i = 1; i <= count; i++ ) {
	if (a.indexOf(i) == -1) {
		missing.push(i);
	}
}
console.log(missing.toString());
res.send('done')
})

//2
router.get("/solution2", function (req, res) {
var a = [33, 34, 35, 37, 38], count = a[a.length - 1];
var missing = [];
for ( var i = 33; i <= count; i++ ) {
	if (a.indexOf(i) == -1) {
		missing.push(i);
	}
}
console.log(missing.toString());
res.send('done')
})



// router.get('/films', function(req,res){
//     let movies= [
//         ["id",1]["name","Shining"],
//         ["id",2]["name","Incendies"],
//     ]
// }



    
// }



module.exports = router;
// adding this comment for no reason
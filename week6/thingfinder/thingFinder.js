const express = require('express')
const thingFinder = express.Router()

const car = [
    {
        year: 1969,
        make: "Chevrolet",
        model: "Camero"
    },
    {
        year: 2002,
        make: "Harley Davidson",
        model: "RoadKing"
    },
    {
        year: 1967,
        make: "Chevrolet",
        model: "Impala"
    }
]

thingFinder.route('/').get((req,res) =>{
    res.send(car)
})
thingFinder.route('/:carModel').get((req,res)=>{
    const carModel = req.params.carModel
    const foundCar = car.find(car => car.model === carModel)
    res.send(foundCar)
})


module.exports = thingFinder
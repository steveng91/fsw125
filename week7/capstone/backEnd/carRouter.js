const express = require('express')
const carRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const app = express()

const cars = [
    {
        make:"ford",
        model:"bronco",
        has4x4: true,
        price: 1000,
        type: "suv",
        _id: uuidv4()
    },
    {
        make:"dodge",
        model:"charger",
        has4x4: false,
        price: 10000,
        type: "car",
        _id: uuidv4()
    },
    {
        make:"chevrolet",
        model:"blazer",
        has4x4: true,
        price: 100,
        type: "suv",
        _id: uuidv4()
    }
]

carRouter.route('/').get((req,res) => {
    res.status(201).send(cars)
})

.post((req,res) => {
    const newCar = req.body
    newCar._id = uuidv4()
    newCar.has4x4 = false
    cars.push(newCar)
    res.status(200).send(newCar)
})

carRouter.route('/car').get((req, res) => {
    const type = req.query.type
    const types = cars.filter(car => car.type===type)
    res.send(types)
})

carRouter.route('/:carId').get((req, res) => { 
    const carId = req.params.carId
    const foundCar = cars.find( car => car._id === carId)
    res.send(foundCar)
})

.delete((req, res) => {
    const carId = req.params.carId
    const carIndex = cars.findIndex(car => car._id === carId)
    cars.splice(carIndex, 1)
    res.send('vehicle removed from inventory')
})

carRouter.put('/:carId',(req,res) => { 
    console.log(req.body)
    const carId = req.params.carId
    const carIndex = cars.findIndex(car => car._id === carId)
    console.log(carIndex)
    const updatedCar = Object.assign(cars[carIndex], req.body)
    res.send({updatedCar})
}) 

module.exports = carRouter 
const express = require('express');
const bountyRouter = express.Router()

const {v4: uuidv4}= require('uuid');
const app = express()

let bounty = [
    {
    firstName: "Darth", 
    lastName: "Vader",
    living: false,
    bounty:500,
    type: "sith",
    _id: uuidv4() 
    },
    {
    firstName: "Luke",
    lastName: "Skywalker",
    living: true,
    bounty: 200,
    type: "Jedi",
    _id: uuidv4()
}
]

bountyRouter.route('/')
.get((req, res) =>{res.send(bounty)})

.post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounty.push(newBounty)
    res.send("bounty sheet updated")
})
bountyRouter.route('/:bountyId') 

.get((req, res) =>{
    const bountyId = req.params.bountyId
    const bountyFound = bounty.find(bounty => bounty._id === bountyId)
    res.send(bountyFound)
})
.delete((req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    bounty.splice(bountyIndex, 1)
    res.send('bounty cleared') 
})
.put((req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounty.findIndex(bounty=>bounty._id ===bountyId)
    const bountyUpdate = Object.assign(bounty[bountyIndex], req.body)
    res.send(`bounty updated to ${bountyUpdate}`)
})

module.exports = bountyRouter
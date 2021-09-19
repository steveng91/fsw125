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
    res.send("bounty sheet updated")
})

module.exports = bountyRouter
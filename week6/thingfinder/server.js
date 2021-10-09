const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.use('/thingFinder', require('./thingFinder'))

app.listen(PORT, ()=>{
    console.log(`thing finder on server ${PORT}`)
})
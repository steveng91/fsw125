const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.use('/todos', require('./todoServer.js'))
app.listen(3000,()=>{
    console.log(`server is running on ${PORT}`)
})
const express = require ('express')
const app = express()
const PORT = 9000

app.use(express.json())

app.use('/cars',require('./carRouter'))

app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errorMessage:err.errorMessage})
})
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`) 
}) 
const express = require('express')
const app = express()
const PORT = 3000

let users = [
    {name: 'John Smith', location: 'New York'},
    {name: 'Bob Marley', location:'Jamaica'},
    {name: 'Peter Griffin', location:'Rhode Island'},
    {name: 'Stan Smith', location:'Langley'}
]

let films = [
    {title:'Tombstone', releaseDate:'1993'},
    {title:'Top Gun', releaseDate:'1986'},
    {title:'The Shining', releaseDate:'1980'},
    {title:'We Were Soldiers', releaseDate:'2002'}
]
let bands = [
    {name:'The Beatles', yearStarted:'1960'},
    {name:'The Who', yearStarted:'1964'},
    {name:'Eagles', yearStarted:'1971'},
    {name:'ACDC', yearStarted:'1973'}
]

app.get('/users', (req, res)=> {
    res.send(users)
})
app.get('/films', (req, res)=> {
    res.send(films)
})
app.get('/bands', (req, res)=> {
    res.send(bands)
})

app.listen(PORT, ()=>{
    console.log(`App started on port: ${PORT}`)
})
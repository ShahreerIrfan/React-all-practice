const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello From my first Server');
})

app.get('/data',(req,res)=>{
    res.send('Home data comming soon')
})

app.listen(port,()=>{
    console.log(`My first server running on port ${port}`)
})
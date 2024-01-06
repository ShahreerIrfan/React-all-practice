const express = require('express')
const cors = require('cors');
const phones = require('./phones.json')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World! IRfan')
})


app.get('/phones',(req,res)=>{
    res.send(phones)
})


app.get('/phone/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    console.log('I nedd data for',id);
    const phone = phones.find(phone=>phone.id==id) || {};
    res.send(phone)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
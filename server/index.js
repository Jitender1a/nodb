const express = require('express')
let bodyParser=require('body-parser')
const app=express();
const port=8005

app.use(bodyParser.json())

app.listen(port,()=>{
    console.log('listening on port',port);
})
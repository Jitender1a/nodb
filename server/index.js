const express = require('express')
let bodyParser=require('body-parser')
const app=express();
let controllers=require('./controllers/controllers')

app.use(bodyParser.json())

app.get('/api/music',controllers.getMusic)
app.post('/api/music',controllers.addMusic)
app.delete('/api/music/:id',controllers.deleteMusic)
app.put('/api/music/:id',controllers.updateMusic)

const port=8005
app.listen(port,()=>console.log('listening on port',port))
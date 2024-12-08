require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

const mongoose = require('mongoose')

const url = process.env.MONGODB_URI;
    
  
mongoose.set('strictQuery',false)
  
mongoose.connect(url).then(result =>{ console.log("connected to mongoDB")}).catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })
require('dotenv').config()

const mongoose = require('mongoose')

//initialises the database connection
const dbConnect = async () => {
    const url = process.env.MONGODB_URI;
    
    mongoose.set('strictQuery',false)
    
    mongoose.connect(url).then(result =>{ console.log("connected to mongoDB")}).catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })
}

module.exports = dbConnect;
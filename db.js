const mongoose = require("mongoose")
require('dotenv').config();

// const mongoURL = "mongodb://127.0.0.1:27017/hotels"

//  const mongoURL = "mongodb+srv://helloworld:gitesh123@cluster0.qawympj.mongodb.net/"

const mongoURL = process.env.MONGODB_URL_LOCAL;

// const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to mongoDB server')
});

db.on('error', () => {
    console.error('MongoDB connection error');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

module.exports = db;
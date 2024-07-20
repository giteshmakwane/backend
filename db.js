const mongoose = require("mongoose")

const mongoURL = "mongodb://127.0.0.1:27017/hotels"

mongoose.connect( mongoURL, {
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
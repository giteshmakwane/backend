
const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();
const passport = require('./auth')


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

//  const person = require('./models/person');
// const MenuItem = require('./models/MenuItem');


// middleware function

const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
    next();
}
app.use(logRequest);


app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', { session: false })

app.get('/', function (req, res) {
    res.send("Welcome to our Hotel...")
})

const personRoutes = require('./routes/personRoutes');
app.use('/person',localAuthMiddleware, personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes)


app.listen(PORT, () => {
    console.log(`App listening on port 3000`)
})





const express = require('express')
const app = express()
const db = require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// const person = require('./models/person');
// const MenuItem = require('./models/MenuItem');


app.get('/', (req, res) => {
    res.send("Welcome to our Hotel...")
})

// post route to add a person


// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body
//         const newPerson = new person(data);
//         const response = await newPerson.save();
//         console.log('Data saved');
//         res.status(200).json(response);

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({error: "internal server error"});
//     }
// })


// // get data

// app.get('/person', async (req, res) => {
//     try {
//         const data = await person.find();
//         console.log("data fetch");
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({error: "internal server error"});
//     }
// })




// app.post('/menu', async (req, res) => {
//     try {
//         const data = req.body
//         const newMenu = new MenuItem(data);
//         const response = await newMenu.save();
//         console.log('Data saved');
//         res.status(200).json(response);

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({error: "internal server error"});
//     }
// })



// app.get('/menu', async (req, res) => {
//     try {
//         const data = await MenuItem.find();
//         console.log("data fetch");
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({error: "internal server error"});
//     }
// })



// app.get('/person/:workType', async(req, res) => {
//         try {
//             const workType = req.params.workType;
//             if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//                 const response = await person.find({work: workType});
//                 console.log('response fetch')
//                 res.status(200).json(response)
//             }else{
//                 res.status(404).json({error: "Invaild work type"});
//             }
//         } catch (err) {
//             console.log(err);
//              res.status(500).json({error: "internal server error"});
//         }
// })



const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes)




app.listen(3000, () => {
    console.log(`App listening on port 3000`)
})


// var fs = require('fs')
// var os = require('os')

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi' +  user.username + '!', () => {
//     console.log('file is created');
// })

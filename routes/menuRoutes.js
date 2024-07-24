const express = require('express')
const router = express.Router();

const MenuItem = require('./../models/MenuItem');


router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('Data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})



router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("data fetch");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})



router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;
        if (taste == 'sweet' || taste == 'spicy' || taste == 'soar') {
            const response = await MenuItem.find({ taste: taste });
            res.status(200).json(response);
        } else {
            res.status(404).json({ errpr: "Invalid taste type" })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})
// comment added for testing purpose
module.exports = router;
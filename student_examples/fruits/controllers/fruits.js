// import express
const express = require('express')
// instantiate a new instance of express.Router
const router = express.Router()

const mongoose = require('../db/connection')
const Fruit = require('../models/Fruit')
const db = mongoose.connection

// import seed data
const seedData = require('../db/seedData.json')

// seed..../fruits/seed
router.get('/seed', async (req, res) => {
    await Fruit.deleteMany({})
    const fruits = await Fruit.insertMany(seedData)
    res.json({status: 200, data: fruits})
})

// index - returns all
router.get('/', async (req, res) => {
    const allFruits = await Fruit.find({})
    res.json({ status: 200, data: allFruits })
		// .finally(() => db.close())
})

// show - returns a single thing
router.get('/:id', async (req, res) => {
    const fruit = await Fruit.findById(req.params.id)
    res.json({status: 200, data: fruit})
        // .catch(err => console.log(err))
})

// create - create a single thing
router.post('/', async (req, res) => {
    const fruit = await Fruit.create(req.body)
    res.json({ status: 200, data: fruit})
})

// delete - remove a single thing
router.delete('/:id', async (req, res) => {
    const fruit = await Fruit.findByIdAndDelete(req.params.id)
    res.json({status: 200, msg: 'item deleted', data: fruit})
})

// put - update a single thing
router.put('/:id', async (req, res) => {
    const fruit = await Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({status: 200, msg: 'item update', data: fruit,})
})

// export router
module.exports = router

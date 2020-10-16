// import express
const express = require('express')
// instantiate a new instance of express.Router
const router = express.Router()

const mongoose = require('../db/connection')
const Fruit = require('../models/Fruit')
const db = mongoose.connection

// index - returns all
router.get('/', (req, res) => {
	Fruit.find({})
		.then((allFruits) => res.json({ status: 200, data: allFruits }))
		.catch((err) => console.log(err))
		// .finally(() => db.close())
})

// show - returns a single thing
router.get('/:id', (req, res) => {
    Fruit.findById(req.params.id)
        .then((fruit) => res.json({status: 200, data: fruit}))
        // .catch(err => console.log(err))
})

// create - create a single thing
router.post('/', (req, res) => {
    const fruit = req.body
    Fruit.create(fruit)
        .then((fruit) => res.json({ status: 200, data: fruit}))
})

// delete - remove a single thing
router.delete('/:id', (req, res) => {
    Fruit.findByIdAndDelete(req.params.id)
        .then(fruit => res.json({status: 200, msg: 'item deleted', data: fruit}))
})

// put - update a single thing
router.put('/:id', (req, res) => {
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(fruit => res.json({status: 200, msg: 'item update', data: fruit,}))
})

// export router
module.exports = router

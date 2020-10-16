const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')
const Fruit = require('../models/Fruit')
const Owner = require('../models/owner')
const db = mongoose.connection

router.get('/', async (req, res) => {
    const owner = await Owner.find({}).populate('fruits')
    res.json({status: 200, data: owner})
})


router.post('/', async (req, res) => {
	const owner = await Owner.create(req.body)
	res.json({ status: 200, data: owner })
})

// 5f89f873495bf1afc74ff1ba - ownerId
// 5f89ec320d5561ab71ec5cc4 - fruitId

router.put('/:ownerId/addFruits/:fruitId', async (req,res) => {
    console.log('owner - put', req.params)
    const fruit = await Fruit.findById(req.params.fruitId)
    const owner = await Owner.findByIdAndUpdate(
            req.params.ownerId,
            { $push: {fruits: fruit.id}, new: true }
    )
    res.json({status: 200, data: owner})
})
module.exports = router
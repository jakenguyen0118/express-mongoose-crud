const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')
const Owner = require('../models/owner')
const db = mongoose.connection

router.post('/', async (req, res) => {
	const owner = await Owner.create(req.body)
	res.json({ status: 200, data: owner })
})

module.exports = router
const mongoose = require('./connection')
const Fruit = require('../models/fruit')
const fruitsData = require('./seedData.json')

const db = mongoose.connection

Fruit.deleteMany({}).then(() => {
    Fruit.insertMany(fruitsData).then(fruit => {
        console.log('fruit', fruit)
        db.close()
    })
})
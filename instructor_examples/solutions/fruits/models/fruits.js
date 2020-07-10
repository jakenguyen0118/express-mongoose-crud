// import connected mongoose variable
const mongoose = require('../db/connection');

const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
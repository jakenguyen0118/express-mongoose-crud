const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/fruits'
const config = {
	useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

mongoose.connect(mongoURI, config)

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

module.exports = mongoose

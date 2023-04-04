// DEPENDENCIES
const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config({ path: '../.env' })
const PORT = process.env.PORT
const app = express()

// MONGOOSE CONNECTION
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// app.use(cors())
// app.use(bodyParser.json())

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Real Estate Listings App 🏡')
})

// LISTINGS
const listingsController = require('./controllers/listings_controller.js')
app.use('/listings', listingsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })  

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT, '🔌');
})

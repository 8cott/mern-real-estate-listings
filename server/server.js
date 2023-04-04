// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config({ path: '../.env' })
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Real Estate Listings App 🏡')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT, '🔌');
})

const express = require('express')
const listings = express.Router()
const Listing = require('../models/listing.js')

// INDEX
listings.get('/', (req, res) => {
    res.send(Listing)
})

// SHOW
listings.get('/:arrayIndex', (req, res) => {
    res.send(Listing[req.params.arrayIndex])
})

module.exports = listings
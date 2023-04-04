const express = require('express')
const listings = express.Router()
const Listing = require('../models/listing.js')

// INDEX
listings.get('/', (req, res) => {
    res.render('Index',
        {
            listings: Listing,
            title: 'Index Page'
        }
    )     
})

// CREATE
listings.post('/', (req, res) => {
    console.log(req.body)
    Listing.push(req.body)
    res.redirect('/listings')
})
  
// NEW
listings.get('/new', (req, res) => {
    res.render('new')
})

// SHOW
listings.get('/:arrayIndex', (req, res) => {
    if (Listing[req.params.arrayIndex]) {
        res.render('Show', {
            listing: Listing[req.params.arrayIndex]
    })
  } else {
        res.send('Error 404')
  }
})

module.exports = listings
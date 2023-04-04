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

// UPDATE
listings.put('/:arrayIndex', (req, res) => {
    Listing[req.params.arrayIndex] = req.body
    res.redirect(`/listings/${req.params.arrayIndex}`)
  })  

// EDIT
listings.get('/:indexArray/edit', (req, res) => {
    res.render('edit', {
      listing: Listing[req.params.indexArray],
      index: req.params.indexArray
    })
})

// DELETE
listings.delete('/:indexArray', (req, res) => {
    Listing.splice(req.params.indexArray, 1)
    res.status(303).redirect('/listings')
  })  

// SHOW
listings.get('/:arrayIndex', (req, res) => {
    if (Listing[req.params.arrayIndex]) {
        res.render('Show', {
            listing: Listing[req.params.arrayIndex],
            index: req.params.arrayIndex,
    })
  } else {
        res.send('Error 404')
  }
})

module.exports = listings
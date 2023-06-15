const express = require('express')
const listings = express.Router()
const Listing = require('../models/listing.js')
const listingSeedData = require('../models/seed.js')

// INDEX
listings.get('/', (req, res) => {
  Listing.find()
    .then(foundListings => {
      res.render('index.jsx', {
        listings: Array.from(foundListings),
        title: 'Index Page'
      });
    })
    .catch(err => {
      res.send('404')
    });
});

// CREATE
listings.post('/', (req, res) => {
    if(!req.body.image_url) {
        req.body.image_url = undefined
    }
    Listing.create(req.body)
    res.redirect('/listings')
})

// NEW
listings.get('/new', (req, res) => {
  res.render('new.jsx');
});

// UPDATE
listings.put('/:id', (req, res) => {
    Listing.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
      .then(updatedListing => {
        console.log(updatedListing) 
        res.redirect(`/listings/${req.params.id}`) 
      })
  })

// EDIT
listings.get('/:id/edit', (req, res) => {
  Listing.findById(req.params.id)
    .then(foundListing => {
      res.render('edit.jsx', {
        listing: foundListing
      });
    })
    .catch(err => {
      res.status(404).send('Listing not found');
    });
});

// DELETE
listings.delete('/:id', (req, res) => {
    Listing.findByIdAndDelete(req.params.id) 
      .then(deletedListing => { 
        res.status(303).redirect('/listings')
      })
  })

// SHOW
listings.get('/:id', (req, res) => {
  Listing.findById(req.params.id)
    .then(foundListing => {
      res.render('show.jsx', {
        listing: foundListing
      });
    })
    .catch(err => {
      res.status(404).send('Listing not found');
    });
});

// SEED ROUTE 
listings.get('/data/seed', (req, res) => {
    Listing.insertMany(listingSeedData)
      .then(createdListings => {
        res.redirect('/listings')
      })
  })  

module.exports = listings
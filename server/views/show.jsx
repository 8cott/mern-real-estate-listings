const React = require('react')
const Default = require('./layouts/default')

function Show ({listing}) {
  console.log(listing.address)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{listing.address}</h3>
        <img src={listing.image} alt={listing.address} />
      </Default>
    )
}

module.exports = Show

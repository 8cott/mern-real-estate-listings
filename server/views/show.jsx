const React = require('react')
const Default = require('./layouts/default')

function Show ({ listing, index }) {
  console.log(listing.address)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{listing.address}</h3>
        <img src={listing.image} alt={listing.address} />
        <form action={`/listings/${index}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form>
      </Default>
    )
}

module.exports = Show
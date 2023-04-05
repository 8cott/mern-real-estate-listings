const React = require('react')
const Default = require('./layouts/default')

function Show ({ listing, index }) {
  console.log(listing.address)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{listing.address}</h3>
        <h3>{listing.apt_num}</h3>
        <h3>{listing.city}</h3>
        <h3>{listing.state}</h3>
        <h3>{listing.zip_code}</h3>
        <h3>{listing.neighborhood}</h3>
        <h3>{listing.borough}</h3>
        <h3>{listing.status}</h3>
        <h3>{listing.property_type}</h3>
        <h3>{listing.bedrooms}</h3>
        <h3>{listing.bathrooms}</h3>
        <h3>{listing.price}</h3>
        <h3>{listing.square_feet}</h3>
        <h3>{listing.price_per_sq_ft}</h3>
        <img src={listing.image_url} alt={listing.address} />
        <form action={`/listings/${listing.id}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form>
        <a href={`/listings/${listing.id}/edit`}><button>Edit</button></a>
      </Default>
    )
}

module.exports = Show
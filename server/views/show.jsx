const React = require('react')
const Default = require('./layouts/default')

function Show ({ listing }) {
    return (
      <Default>
        <div className="card">
  <img className="card-img-top" src={listing.image_url} alt={listing.address} />
  <div className="card-body">
    <h5 className="card-title">{listing.address}, Apt {listing.apt_num}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Status: {listing.status}</li>
    <li className="list-group-item">{listing.city}, {listing.state} {listing.zip_code}</li>
    <li className="list-group-item">{listing.neighborhood} / {listing.borough}</li>
    <li className="list-group-item">{listing.property_type}</li>
    <li className="list-group-item">Bedrooms: {listing.bedrooms} Bathrooms: {listing.bathrooms}</li>
    <li className="list-group-item">Price: {listing.price}</li>
    <li className="list-group-item">Square Feet: {listing.square_feet} | Price Per SqFt: {listing.price_per_sq_ft}</li>
  </ul>
  <li className="card-text card-description">Description: {listing.description}</li>
  <div className="card-body">
  <hr />
    <div className='btn-group'>
    <a href={`/listings/${listing.id}/edit`}><button className='form-button'>Edit</button></a>
        <form action={`/listings/${listing.id}?_method=DELETE`} method="POST">
          <input className='input-btn' type='submit' value="DELETE"/>
        </form>
        </div>
  </div>
</div>
      </Default>
    )
}

module.exports = Show
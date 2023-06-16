const React = require('react')
const Default = require('./layouts/default')

function Index ({ listings }) {
    return (
      <Default>
           <div className="table-responsive">
        <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Address</th>
            <th>Apt</th>
            <th>Neighborhood</th>
            <th>Borough</th>
            <th>Status</th>
            <th>Type</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Price</th>
            <th>Sq Feet</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing, index) => (
            <tr key={index}>
              <td>
              <a href={`/listings/${listing.id}`}><img
                  src={listing.image_url}
                  alt="Listing Image"
                  className="thumbnail"
                /></a>
              </td>  
              <td><a href={`/listings/${listing.id}`}>{listing.address}</a></td>
              <td>{listing.apt_num}</td>
              <td>{listing.neighborhood}</td>
              <td>{listing.borough}</td>
              <td>{listing.status}</td>
              <td>{listing.property_type}</td>
              <td>{listing.bedrooms}</td>
              <td>{listing.bathrooms}</td>
              <td>{listing.price}</td>
              <td>{listing.square_feet}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='hide-large'>
  {listings.map((listing, index) => (
    <div key={index} className="card card-small" style={{width: "100%"}}>
      <a href={`/listings/${listing.id}`}>
        <img className="card-img-top" src={listing.image_url} alt="listing_image" />
      </a>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href={`/listings/${listing.id}`}>{listing.address}</a>
        </li>
        <li className="list-group-item">Apt: {listing.apt_num}</li>
        <li className="list-group-item">{listing.neighborhood}</li>
      </ul>
    </div>
  ))}
</div>
      </div>
       

      </Default>
    )
}

module.exports = Index
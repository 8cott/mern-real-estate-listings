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
              <div key={index} className="card card-i" style={{width: "100%"}}>
              <a href={`/listings/${listing.id}`}><img className="card-img-top" src={listing.image_url} alt="listing_image" /></a>
               <div className="card-body">
                <p className="card-text"><a href={`/listings/${listing.id}`}>{listing.address}</a></p>
                <p className="card-text">{listing.apt_num}</p>
                <p className="card-text">{listing.neighborhood}</p>
              </div>
            </div>
          ))}
    
      </div>
      </div>
       

      </Default>
    )
}

module.exports = Index
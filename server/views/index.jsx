const React = require('react')
const Default = require('./layouts/default')

function Index ({ listings }) {
    return (
      <Default>
        <h2>Index Page</h2>
        {/* <p>I have {listings[0].address} Listed!</p> */}
        <ul>
            {
              listings.map((listing, index) => {
                return (<li key={index}>
                    <a href={`/listings/${listing.id}`}>
                    {listing.address}
                    </a>
                </li>)
              })  
            }
        </ul>
        <div className="newButton">
          <a href="/listings/new"><button>Add a new listing</button></a>
        </div>
      </Default>
    )
}

module.exports = Index

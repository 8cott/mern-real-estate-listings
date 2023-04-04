const React = require('react')
const Default = require('./layouts/default')

function Index ({ listings }) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        {/* <p>I have {listings[0].address} Listed!</p> */}
        <ul>
            {
              listings.map((listing, index) => {
                return (<li key={index}>
                    <a href={`/listings/${index}`}>
                    {listing.address}
                    </a>
                </li>)
              })  
            }
        </ul>
      </Default>
    )
}

module.exports = Index

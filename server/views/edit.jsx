const React = require('react')
const Default = require('./layouts/default')

function Edit ({ listing }) {
    return (
      <Default>
        <h3 className='edit'>Edit: {listing.address} {listing.apt_num}</h3>
        <form action={`/listings/${listing.id}?_method=PUT`} method="POST">
          <label htmlFor='address'>address</label>
          <input
            type='text'
            name='address'
            id='address'
            required
            defaultValue={listing.address}
          />
          <label htmlFor='apt_num'>apt_num</label>
          <input
            type='text'
            name='apt_num'
            id='apt_num'
            required
            defaultValue={listing.apt_num}
          />
          <label htmlFor='city'>city</label>
          <input
            type='text'
            name='city'
            id='city'
            required
            defaultValue={listing.city}
          />
          <label htmlFor='state'>state</label>
          <input
            type='text'
            name='state'
            id='state'
            required
            defaultValue={listing.state}
          />
          <label htmlFor='zip_code'>zip_code</label>
          <input
            type='text'
            name='zip_code'
            id='zip_code'
            required
            defaultValue={listing.zip_code}
          />
          <label htmlFor='neighborhood'>neighborhood</label>
          <input
            type='text'
            name='neighborhood'
            id='neighborhood'
            required
            defaultValue={listing.neighborhood}
          />
          <label htmlFor='borough'>borough</label>
          <input
            type='text'
            name='borough'
            id='borough'
            required
            defaultValue={listing.borough}
          />
          <label htmlFor='status'>status</label>
          <input
            type='text'
            name='status'
            id='status'
            required
            defaultValue={listing.status}
          />
          <label htmlFor='property_type'>property_type</label>
          <input
            type='text'
            name='property_type'
            id='property_type'
            required
            defaultValue={listing.property_type}
          />
          <label htmlFor='bedrooms'>bedrooms</label>
          <input
            type='text'
            name='bedrooms'
            id='bedrooms'
            required
            defaultValue={listing.bedrooms}
          />
          <label htmlFor='bathrooms'>bathrooms</label>
          <input
            type='text'
            name='bathrooms'
            id='bathrooms'
            required
            defaultValue={listing.bathrooms}
            />
          <label htmlFor='price'>price</label>
          <input
            type='text'
            name='price'
            id='price'
            required
            defaultValue={listing.price}
          />
          <label htmlFor='square_feet'>square_feet</label>
          <input
            type='text'
            name='square_feet'
            id='square_feet'
            defaultValue={listing.square_feet}
          />
          <label htmlFor='price_per_sq_ft'>price_per_sq_ft</label>
          <input
            type='text'
            name='price_per_sq_ft'
            id='price_per_sq_ft'
            defaultValue={listing.price_per_sq_ft}
          />
          <label htmlFor='description'>listing description</label>
          <input
            type='text'
            name='description'
            id='description'
            defaultValue={listing.description}
          />
          <label htmlFor='image_url'>image_url</label>
          <input
            type='text'
            name='image_url'
            id='image_url'
            defaultValue={listing.image_url}
          />
          <br />
          <input className='submitButton' type='submit' value='Update' />
        </form>
      </Default>
    )
}

module.exports = Edit
const React = require('react')
const Default = require('./layouts/default')

function New () {
    return (
      <Default>
        <h3 className='create'>Create Listing</h3>
        <form action="/listings" method="POST">
          <label htmlFor='address'>address</label>
          <input
            type='text'
            name='address'
            id='address'
            required
          />
          <label htmlFor='apt_num'>apt_num</label>
          <input
            type='text'
            name='apt_num'
            id='apt_num'
            required
          />
          <label htmlFor='city'>city</label>
          <input
            type='text'
            name='city'
            id='city'
            required
          />
          <label htmlFor='state'>state</label>
          <input
            type='text'
            name='state'
            id='state'
            required
          />
          <label htmlFor='zip_code'>zip_code</label>
          <input
            type='text'
            name='zip_code'
            id='zip_code'
            required
          />
          <label htmlFor='neighborhood'>neighborhood</label>
          <input
            type='text'
            name='neighborhood'
            id='neighborhood'
            required
          />
          <label htmlFor='borough'>borough</label>
          <input
            type='text'
            name='borough'
            id='borough'
            required
          />
          <label htmlFor='status'>status</label>
          <input
            type='text'
            name='status'
            id='status'
            required
          />
          <label htmlFor='property_type'>property_type</label>
          <input
            type='text'
            name='property_type'
            id='property_type'
            required
          />
          <label htmlFor='bedrooms'>bedrooms</label>
          <input
            type='text'
            name='bedrooms'
            id='bedrooms'
            required
          />
          <label htmlFor='bathrooms'>bathrooms</label>
          <input
            type='text'
            name='bathrooms'
            id='bathrooms'
            required
            />
          <label htmlFor='price'>price</label>
          <input
            type='text'
            name='price'
            id='price'
            required
          />
          <label htmlFor='square_feet'>square_feet</label>
          <input
            type='text'
            name='square_feet'
            id='square_feet'
          />
          <label htmlFor='price_per_sq_ft'>price_per_sq_ft</label>
          <input
            type='text'
            name='price_per_sq_ft'
            id='price_per_sq_ft'
          />
           <label htmlFor='description'>listing description</label>
          <input
            type='text'
            name='description'
            id='description'
          />
          <label htmlFor='image_url'>image_url</label>
          <input
            type='text'
            name='image_url'
            id='image_url'
          />
          <br />
          <input type='submit' className='submitButton' value='submit'/>
        </form>
      </Default>
    )
}

module.exports = New

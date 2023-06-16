const React = require('react')

function Navbar() {
    return (
        <>
        <header>
            <div className="navbar stacked-nav">
                <div className="logo"><a href="/listings"><img src="https://i.imgur.com/BHcMimH.png" alt="logo" className="srlogo" /></a></div>
                <ul className="links">
                    <li className='title-large'>Real Estate Listings</li>
                    <li className='title-small'><span>Real</span> <span>Estate</span> <span>Listings</span></li>
                </ul>
                <a href="/listings/new"><button className='action_btn'>Create Listing</button></a>
            </div>
        </header>
        </>
    )
}


module.exports = Navbar
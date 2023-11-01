import React from 'react'
import './footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="brandname">
              <div className="brand">BRAND NAME</div>
              <br></br>
              <br></br>
              <br></br>
              <div className='lorem'>Lorem ipsum decor sit amet,consectetur<br></br>adipiscing elit,sed do eiusmad tempor.</div>
              <br></br>
              <br></br>
              <div className='address'>121 King Street,Melbourne 3000<br></br>+12 3 0000 0000<br></br>diotic@gmail.com</div>
            </div>
            <div className='left2'>
                <p className="heading">SHOPPING</p>
                <br></br>
              <br></br>
                <ul className='shopping'>
                    <li>Your cart</li>
                    <li>Your orders</li>
                    <li>Compared Items</li>
                    <li>Wishlist items</li>
                    <li>Shipping detail</li>
                </ul>
            </div>
            <div className='morelinks'>
                <p className="heading">MORE LINKS</p>
                <br></br>
              <br></br>
            <ul className='shopping'>
                    <li>Blog</li>
                    <li>Gift Center</li>
                    <li>Buying Guides</li>
                    <li>New Arrivals</li>
                    <li>Clearance</li>
                </ul>
            </div>
            <div className="promoupdate">
                <p className='heading'>PROMO UPDATE</p>
                <br></br>
              <br></br>
                <p className='date'>14 May</p>
                <p className='lorem'>Lorem ipsum delor sit amet,consectetur <br></br> adipiscing elit.</p>
                <p className='comment'>3 comments</p>
                <br></br>
              <br></br>
                <hr></hr>
                <br></br>
              <br></br>
                <p className='date'>15 July</p>
                <p className='lorem'>Lorem ipsum delor sit amet,consectetur <br></br> adipiscing elit.</p>
                <p className='comment'>3 Comments</p>
            </div>
        </div>
    )
}

export default Footer
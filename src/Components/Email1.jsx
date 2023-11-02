import React from 'react'
import '../index.css'

function Email(){
    return(
        <div className="emailus">
            <div className="emailtext">
              <div className="signuptext">
                SIGN UP FOR OUR NEWSLETTER
              </div>
              <div className="subsribetext">
                Subscribe for the latest deals and promotions
              </div>
            </div>
            <div className="search">
            <div className="searchbar">
             <input type='text' id='inputsearch'/>
            </div>
            <div className="searchkey">
                <button className='searchbutton'>Search</button>
            </div>
        </div>
        </div>
    )
}
export default Email
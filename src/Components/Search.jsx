import React from 'react'
import '../index.css'
import search from '../assets/search1.png'
function Search(){
    return(
        <div className="search">
            <div className="searchbar">
                 <img src={search} style={{height : '1.5rem'}}/>
                  <input type='text' id='inputsearch' />
            </div>
            <div className="searchkey">
                <button className='searchbutton'>Search</button>
            </div>
        </div>
    )
}

export default Search
import React from 'react'
import '../index.css'
import search from '../assets/search1.png'
function Search(){
    return(
        <div className="search">
            <div className="searchbar">
                  <div className="searchtext">
                     <img src={search}/>
                      <input type='text' id='inputsearch'/>
                 </div>
            </div>
            <div className="searchkey">
                <button className='searchbutton'>Search</button>
            </div>
        </div>
    )
}

export default Search
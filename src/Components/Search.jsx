import React from 'react'
import '../index.css'

function Search(){
    return(
        <div className="search">
            <div className="searchbar">
             <input type='text' id='inputsearch'/>
            </div>
            <div className="searchkey">
                <button className='searchbutton'>Search</button>
            </div>
        </div>
    )
}

export default Search
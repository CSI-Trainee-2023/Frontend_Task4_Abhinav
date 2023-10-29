import React, { useState } from 'react'
import Itemfunct from './itemfunct';
import Hoverdisplay from './hoverdisplay';
function Onhover(props) {
    const[showSpeed,setHover]=useState(false)
    function displayhover()
    {
        setHover(true);
    }
    function notdisplayhover()
    {
        setHover(false);
    }
  return (
    
    <>
    <div className='hoverItemRow'>
      <div className='hoverItemContainer' onMouseOver={displayhover} onMouseOut={notdisplayhover}>
            {showSpeed?<Hoverdisplay img={props.img} text={props.text}/>:<Itemfunct img={props.img} text={props.text}/>}
      </div>
      </div>

    </>
  )
}

export default Onhover
import React from "react";
import '../index.css'
import star from '../assets/stars.png'

function Itemfunct(props) {
   return(
    <div className="item8">
        <img src={props.img}/>
        <div>{props.text}</div>
        <div><img src={star}/></div>
        <div className='ratedprice'>30$</div>
     </div>
   )
}
export default Itemfunct
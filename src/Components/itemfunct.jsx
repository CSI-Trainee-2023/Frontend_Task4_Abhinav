import React from "react";
import '../index.css'
import star from '../assets/stars.png'

function Itemfunct(props) {
   return(
      <div className="image-container">
        
        <img src={props.img}  className="image" style={{height : 300 , width : 300}} />
       
        <div>{props.text}</div>
        <div className="starimage"><img src={star}/></div>
        <div className='ratedprice'>30$</div>
        <div className="hovercontent">
        <div className="hover-text">Lorem ipsum dolor<br></br>sit amet, consectetur<br></br> adipiscing elit, sed do <br></br>eiusmod tempor incididunt <br></br>ut labore et dolore<br></br> magna aliqua.</div>
        <div className='searchbutton1'>VIEW ALL</div>
        </div>
     
     </div>   
   )
}
export default Itemfunct
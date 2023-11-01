import React from "react";
import '../index.css'
import star from '../assets/stars.png'
import { Link } from "react-router-dom";
export let nowData= {};
function Itemfunct(props) {
   const productDetail=()=>{
      nowData=props;
  }
   return(
      <div className="image-container">
        <img src={props.img}  className="image" style={{height : 300 , width : 300}} />
       
        <div className="item-text">{props.text}</div>
        <div className="starimage"><img src={star}/></div>
        <div className='ratedprice'>30$</div>
        <div className="hovercontent">
        <div className="hover-text">Lorem ipsum dolor<br></br>sit amet, consectetur<br></br> adipiscing elit, sed do <br></br>eiusmod tempor incididunt <br></br>ut labore et dolore<br></br> magna aliqua.</div>
        <Link to="/detailchair"><button className='searchbutton1' onClick={productDetail}>VIEW ALL</button></Link>
        </div>
     </div>   
   )
}
export default Itemfunct
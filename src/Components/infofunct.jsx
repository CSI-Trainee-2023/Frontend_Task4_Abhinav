import React from "react";
import '../index.css'
import { Link } from "react-router-dom";
export let nowData1={}; 
function Infofunct(props){
    const productDetail1=()=>{
        nowData1= props;
    }
    return(
        <div className="part1a">
                <div className="lefta">
                    <img src={props.img} style={{height : '25rem', width : '24.063rem'}}/>
                </div>
                <div className="leftb">
                  <p>{props.text}</p>
                 <Link to="/detailvase"> <button className='searchbutton' onClick={productDetail1}>View Details</button></Link>
                </div>
            </div>
    )
}

export default Infofunct
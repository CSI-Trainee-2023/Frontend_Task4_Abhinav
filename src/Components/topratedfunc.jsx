import React from "react";
import '../index.css'
import star from '../assets/stars.png'

function Topratedfunc (props) {
    return(
        <div className="toprated">
            <img src={props.img}/>
            <div className="ratedtext">
                <div className="ratedname">{props.text}</div>
                <div className="starimage"><img src={star}/></div>
                <div className="ratedprice">$30</div>
                </div>
        </div>
    )
}
export default Topratedfunc
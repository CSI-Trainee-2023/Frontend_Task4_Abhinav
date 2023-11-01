import React from "react";
import '../index.css'
import Topratedfunc from "./topratedfunc";
import rated1 from '../assets/Rectangle 26.png'
import rated2 from '../assets/Rectangle 27.png'
import rated3 from '../assets/Rectangle 28.png'
import rated4 from '../assets/Rectangle 29.png'
import rated5 from '../assets/Rectangle 30.png'
import rated6 from '../assets/Rectangle 31.png'
import rated7 from '../assets/Rectangle 32.png'
import rated8 from '../assets/Rectangle 33.png'
import rated9 from '../assets/Rectangle 34.png'
function Toprating() {
    return(
        <div className="toprated">
            <div className="ratedtext1">Top Rated</div>
            <div className="ratedcontainer">
             <div className="ratedobject">
                <Topratedfunc img={rated1} text="Tray With  Foot"/>
                <Topratedfunc img={rated2} text="Twill Seat Cusion"/>
                <Topratedfunc img={rated3} text="Fluted Beverage Glass"/>
             </div>
             <div className="ratedobject1">
                <Topratedfunc img={rated4} text="Ceramic Egg Cup"/>
                <Topratedfunc img={rated5} text="4-pack Ceramic cups"/>
                <Topratedfunc img={rated6} text="2-pack Linen Napkins "/>
             </div>
             <div className="ratedobject2">
                <Topratedfunc img={rated7} text="Glazed Stoneware Plate"/>
                <Topratedfunc img={rated8} text="Small Bamboo Box"/>
                <Topratedfunc img={rated9} text="Metal Cutlery Basket"/>
             </div>
             </div>
        </div>
    )
}
export default Toprating
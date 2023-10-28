import React from "react";
import '../index.css'
import rated1 from '../assets/Rectangle 26.png'
import rated2 from '../assets/Rectangle 27.png'
import rated3 from '../assets/Rectangle 28.png'
import rated4 from '../assets/Rectangle 29.png'
import rated5 from '../assets/Rectangle 30.png'
import rated6 from '../assets/Rectangle 31.png'
import rated7 from '../assets/Rectangle 32.png'
import rated8 from '../assets/Rectangle 33.png'
import rated9 from '../assets/Rectangle 34.png'
import starsr from '../assets/stars.png'
function Toprating() {
    return(
        <div className="toprated">
            <div className="ratedtext1">Top Rated</div>
             <div className="ratedupper">
                <div className="component">
                <div className="ratedimage">
                    <img src={rated1}/>
                </div>
                <div className="ratedtext">
                    <div className="ratedname">Tray with<br></br>Foot</div>
                    <div className="ratedrating">
                        <img src={starsr}/>
                    </div>
                    <div className="ratedprice">30$</div>
                </div>
                </div>
                <div className="component">
                <div className="ratedimage">
                    <img src={rated2}/>
                </div>
                <div className="ratedtext">
                    <div className="ratedname">Twill Seat<br></br>Cushion</div>
                    <div className="ratedrating">
                        <img src={starsr}/>
                    </div>
                    <div className="ratedprice">30$</div>
                </div>
                </div>
                <div className="component">
                <div className="ratedimage">
                    <img src={rated3}/>
                </div>
                <div className="ratedtext">
                    <div className="ratedname">Fluted<br></br>Beverage<br></br>Glasses</div>
                    <div className="ratedrating">
                        <img src={starsr}/>
                    </div>
                    <div className="ratedprice">30$</div>
                </div>
                </div>
             </div>
             <div className="ratedupper">
                <div className="component">
                <div className="ratedimage">
                    <img src={rated4}/>
                </div>
                <div className="ratedtext">
                    <div className="ratedname">Ceramic<br></br> Egg Cup</div>
                    <div className="ratedrating">
                        <img src={starsr}/>
                    </div>
                    <div className="ratedprice">30$</div>
                </div>
                </div>
                <div className="component">
                <div className="ratedimage">
                    <img src={rated5}/>
                </div>
                <div className="ratedtext">
                    <div className="ratedname">4-pack<br></br>Ceramic<br></br>Cups</div>
                    <div className="ratedrating">
                        <img src={starsr}/>
                    </div>
                    <div className="ratedprice">30$</div>
                </div>
                </div>
                <div className="component">
                <div className="ratedimage">
                    <img src={rated6}/>
                </div>
                <div className="ratedtext">
                    <div className="ratedname">2-pack<br></br>Linen<br></br>Napkins</div>
                    <div className="ratedrating">
                        <img src={starsr}/>
                    </div>
                    <div className="ratedprice">30$</div>
                </div>
                </div>
             </div>
             <div className="ratedupper">
                <div className="component">
                <div className="ratedimage">
                    <img src={rated7}/>
                </div>
                <div className="ratedtext">
                    <div className="ratedname">Glazed<br></br>Stoneware<br></br>Plate</div>
                    <div className="ratedrating">
                        <img src={starsr}/>
                    </div>
                    <div className="ratedprice">30$</div>
                </div>
                </div>
                <div className="component">
                <div className="ratedimage">
                    <img src={rated8}/>
                </div>
                <div className="ratedtext">
                    <div className="ratedname">Small<br></br>Bamboo<br></br>Box</div>
                    <div className="ratedrating">
                        <img src={starsr}/>
                    </div>
                    <div className="ratedprice">30$</div>
                </div>
                </div>
                <div className="component">
                <div className="ratedimage">
                    <img src={rated9}/>
                </div>
                <div className="ratedtext">
                    <div className="ratedname">Metal<br></br>Cutlery<br></br>Plate</div>
                    <div className="ratedrating">
                        <img src={starsr}/>
                    </div>
                    <div className="ratedprice">30$</div>
                </div>
                </div>
             </div>

        
        </div>
    )
}
export default Toprating
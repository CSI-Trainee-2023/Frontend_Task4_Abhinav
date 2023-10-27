import React from 'react'
import '../index.css'
import chair2 from '../assets/chair/indexchair.jpg'
import pot from '../assets/Terrocotavase/index.jpg'
function Info1() {
    return(
         <div className="Info1">
            <div className="part1a">
                <div className="lefta">
                    <img src={chair2} style={{height : 400}}/>
                </div>
                <div className="leftb">
                  <p> INY VINTAGE CHAIR</p>
                  <button className='searchbutton'>View Details</button>
                </div>
            </div>
            <div className="part2a">
                <div className="righta">
                      <img src={pot} style={{height : 400}}/>
                </div>
                <div className="rightb">
                    <p>LARGE TERRACOTA VASE</p>
                    <button className='searchbutton'>View Details</button>
                </div>
            </div>
         </div>
    )
}

export default Info1
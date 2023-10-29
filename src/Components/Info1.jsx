import React from 'react'
import '../index.css'
import chairhm from '../assets/chairhm.jpeg'
import stool from '../assets/stoolhm2.jpg'
import pot from '../assets/Terrocotavase/index.jpg'
import { Link } from 'react-router-dom'
function Info1() {
    return(
         <div className="Info1">
            <div className="part1a">
                <div className="lefta">
                    <img src={stool} style={{height : '25rem', width : '24.063rem'}}/>
                </div>
                <div className="leftb">
                  <p> INY VINTAGE</p>
                 <Link to="/detailchair"> <button className='searchbutton'>View Details</button></Link>
                </div>
            </div>
            <div className="part2a">
                <div className="righta">
                      <img src={pot} style={{height : '25rem'}}/>
                </div>
                <div className="rightb">
                    <p>LARGE TERRACOTA VASE</p>
                   <Link to="/detailvase"><button className='searchbutton'>View Details</button></Link>
                </div>
            </div>
         </div>
    )
}

export default Info1
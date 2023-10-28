import React from 'react'
import '../index.css'
import mat from '../assets/mainmat.jpg'
import basket from '../assets/mainbasket.webp'
import glassbox from '../assets/mainglassbox.webp'
import plate from '../assets/mainplate.jpg'
import metalbasket from '../assets/metalbasket.jpeg'
import jutebag from '../assets/jute bag/mainjutebag.webp'
import linentowel from '../assets/linentowel/maintowel.jpg'
import largeglassbox from '../assets/largeglassbox/largeglassmain.jpg'
function Item() {
  return(
    <div className="8item">
      <div className="upper8">
        <div className="upper1">
         <img src={mat} style={{ width: 300, height: 300 }}/>
        </div>
        <div className="upper2">
         <img src={basket} style={{ width: 300, height: 300 }}/>
        </div>
        <div className="upper3">
          <img src={glassbox} style={{ width: 300, height: 300 }}/>
        </div>
        <div className="upper4">
         <img src={plate} style={{ width: 300, height: 300 }}/>
        </div>
      </div>
      <div className="lower8">
         <div className="lower1">
         <img src={metalbasket} style={{ width: 300, height: 300 }}/>
         </div>
         <div className="lower2">
         <img src={jutebag} style={{ width: 300, height: 300 }}/>
         </div>
         <div className="lower3">
         <img src={linentowel} style={{ width: 300, height: 300 }}/>
         </div>
         <div className="lower4">
         <img src={largeglassbox} style={{ width: 300, height: 300 }}/>
         </div>
      </div>
    </div>
  )
}

export default Item
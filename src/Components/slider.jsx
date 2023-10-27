import React from 'react'
import '../index.css'
import chair from '../assets/image2.png'
function Slider() {
    return(
        <div className="slider">
            <button className='pre-button'><p>&lt;</p></button>
            <button className='next-button'><p>&gt;</p></button>

            <div className="imagecontainer">
               <img src={chair}/>
            </div>
        </div>
    )
}
export default Slider
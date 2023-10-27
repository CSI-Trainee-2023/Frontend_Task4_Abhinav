import React from 'react'
import '../index.css'
import truck from '../assets/truck.png'
import refund from '../assets/refund.png'
import mic from '../assets/mic.png'
function Shipping() {
    return(
        <div className="ship">
        <div className='shippinglogo' ><div ><img src={truck}/> </div><div>FREE SHIPPING</div></div>
        <div className='Refund'><div ><img src={refund}/></div><div>100 %REFUND</div></div>
        <div className="support"><div ><img src={mic}/></div><div>SUPPORT 24/7</div></div>
        </div>
    )
}
export default Shipping
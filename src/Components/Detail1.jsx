import React from 'react'
import './detail.css'
import Header from './Header'
import Logo from './logo'
import Footer from './footer'
import Email from './emailus'
import stool from '../assets/stoolhm2.jpg'
import stool3 from '../assets/stoolhm3.webp'
import stool4 from '../assets/stoolhm4.webp'
function Detail1() {
  return (
    <>
    <Logo/>
    <Header/>
    <div className="fulldetail">
    {/* <div className="detailheading">RATTAN TABLE</div> */}
    <div className="detail">
        <div className="detailimage">
            <div className="upperimage">
           <div className="image1">
           <img src={stool} style={{width : '12rem' , height : '15rem'}}/>
           </div>
           <div className="image2">
           <img src={stool3} style={{width : '12rem' , height : '15rem'}}/>
           </div>
           
           </div>
           <div className="lowerimage">
            <img src={stool4} style={{width : '24rem' , height : '22rem'}}/>
           </div>
           </div>
           <div className="detailtext">
             <div className='detailname'>RATTAN TABLE</div>
             <div className='detailprice'>$39.99</div>
             <div className='detailp'>Children's rattan side table</div>
              <button className='searchbutton'>ADD TO CART</button>
            </div>
        
        
    </div>
    </div>
    <Email/>
    <Footer/>
    </>
  )
}

export default Detail1

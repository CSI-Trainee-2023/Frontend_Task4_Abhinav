import React from 'react'
import './detail.css'
import Header from './Header'
import Logo from './logo'
import Footer from './footer'
import Email from './emailus'
import vase1 from '../assets/vasehm.jpeg'
import vase2 from '../assets/vasehm2.webp'
function Detail2() {
  return (
    <>
    <Logo/>
    <Header/>
    <div className="detail">
            <div className="upperimage">
           <div className="image1">
           <img src={vase1} style={{width : '22rem'  , height : '56.25rem'}}/>
           </div>
           <div className="image2">
           <img src={vase2} style={{width : '22rem' , height : '56.25rem'}}/>
           </div>
           </div>
           <div className="detailtext">
             <div className='detailname'>Terracota Vase</div>
             <div className='detailprice'>$39.99</div>
             <div className='detailp'>Round glazed terracotta vase.</div>
              <button className='searchbutton'>ADD TO CART</button>
            </div>
    </div>
    <Email/>
    <Footer/>
    </>
  )
}

export default Detail2
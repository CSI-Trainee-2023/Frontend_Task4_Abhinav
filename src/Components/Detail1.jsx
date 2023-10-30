import React,{useEffect} from 'react'
import './detail.css'
import Header from './Header'
import Logo from './logo'
import Footer from './footer'
import Email from './emailus'
import stool from '../assets/stoolhm2.jpg'
import stool3 from '../assets/stoolhm3.webp'
import stool4 from '../assets/stoolhm4.webp'
import {nowData} from './itemfunct.jsx'

function Detail1(props) {

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
           <img src={nowData.img} style={{width : '12rem' , height : '15rem'}}/>
           </div>
           <div className="image2">
           <img src={nowData.img} style={{width : '12rem' , height : '15rem'}}/>
           </div>
           
           </div>
           <div className="lowerimage">
            <img src={nowData.img} style={{width : '24rem' , height : '22rem'}}/>
           </div>
           </div>
           <div className="detailtext">
             <div className='detailname'>{nowData.text}</div>
             <div className='detailprice'>$39.99</div>
             <div className='detailp'>Best Product</div>
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

import React,{useState} from 'react'
import './detail.css'
import Header from './Header'
import Logo from './Logo'
import Footer from './Footer1'
import Email from './Email1'
import { Link } from 'react-router-dom'
import {nowData} from './itemfunct.jsx'
export const Items =[];
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
             <Link to="/cart"><button className='searchbutton'>ADD TO CART</button></Link>
            </div> 
    </div>
    </div>
    <Email/>
    <Footer/>
    </>
  )
}

export default Detail1

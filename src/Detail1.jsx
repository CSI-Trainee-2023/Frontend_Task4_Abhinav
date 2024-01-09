import React,{useState} from 'react'
import './Components/detail.css'
import Header from './Components/Header.jsx'
import Logo from './Components/Logo.jsx'
import Footer from './Components/Footer1.jsx'
import Email from './Components/Email1.jsx'
import { Link } from 'react-router-dom'
import {nowData} from './Components/itemfunct.jsx'
export const list =[];
function Detail1(props) {
  const addToCart = () => {
    console.log(nowData)
    list.push(nowData)
    console.log(list)
  }
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
             <Link to="/cart"><button className='searchbutton' onClick={addToCart}>ADD TO CART</button></Link>
            </div> 
    </div>
    </div>
    <Email/>
    <Footer/>
    </>
  )
}

export default Detail1

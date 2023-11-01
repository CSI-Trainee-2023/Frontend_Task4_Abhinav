import React,{useState} from "react";
import '../index.css'
import Header from './Header'
import Logo from './logo'
import Footer from './footer'
import Email from './emailus'
import Cartheader from "./cartheader";
import {nowData} from './itemfunct.jsx'
function Cart() {
    return (
         <>
         <Logo/>
         <Header/>         
         <Cartheader/>
         <div className="cart">
               <div className="cartimage">
                 <img src={nowData.img} style={{height : 150 , width : 150}}/>
               </div>
               <div className="carttext">{nowData.text}</div>
               <div className="detailprice">$39.99</div>
         </div>
         <Email/>
         <Footer/>
         </>
    );
}
  export default Cart
import React,{useState} from "react";
import '../index.css'
import Header from './Header'
import Logo from './Logo'
import Footer from './Footer1'
import Email from './Email1'
import Cartheader from "./cartheader";
import {nowData} from './itemfunct.jsx'
import { list } from "../Detail1";
function Cart() {
    return (
         <>
         <Logo/>
         <Header/>         
         <Cartheader/> 
               {list.map((item) => (
                <div className="cartfinal">
               <div className="cartimage">
                 <img src={item.img} style={{height : 150 , width : 150}}/>
               </div>
               <div className="carttext">{item.text}</div>
               <div className="detailprice">$39.99</div>
               </div>
               ))}
         <Email/>
         <Footer/>
         </>
    );
}
  export default Cart
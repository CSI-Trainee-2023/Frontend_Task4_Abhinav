import React from 'react'
import '../index.css'
import mat from '../assets/mainmat.jpg'
import basket from '../assets/mainbasket.webp'
import glassbox from '../assets/mainglassbox.webp'
import plate from '../assets/mainplate.jpg'
import metalbasket from '../assets/metalbasket.jpeg'
import jutebag from '../assets/jute bag/mainjutebag.webp'
import largeglassbox from '../assets/largeglassbox/largeglassmain.jpg'
import linentowelf from '../assets/linenfinal.png'
import Itemfunct from './itemfunct.jsx'

function Item(props){
  return (
      <div className="item8">
        <div className="upper4">
           <div><Itemfunct img = {mat} text ="Round Jute Placemat"/></div>
           <div><Itemfunct img = {basket} text ="Metal Wire Basket"/></div>
           <div><Itemfunct img = {glassbox} text ="Small Glass Box"/></div>
           <div><Itemfunct img = {plate} text ="4-pack Ceramic Plates"/></div>
        </div>
        <div className="lower4">
           <div><Itemfunct img = {metalbasket} text ="Small Metal Basket"/></div>
           <div><Itemfunct img = {jutebag} text ="Jute bag"/></div>
           <div><Itemfunct img = {linentowelf} text ="Linen Towel"/></div>
           <div><Itemfunct img = {largeglassbox} text ="Large Glass"/></div>
        </div>
      </div>
    );
}
export default Item
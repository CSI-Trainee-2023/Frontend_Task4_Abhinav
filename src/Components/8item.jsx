import React from 'react'
import '../index.css'
import Hover from 'hover'
import mat from '../assets/mainmat.jpg'
import basket from '../assets/mainbasket.webp'
import glassbox from '../assets/mainglassbox.webp'
import plate from '../assets/mainplate.jpg'
import metalbasket from '../assets/metalbasket.jpeg'
import jutebag from '../assets/jute bag/mainjutebag.webp'
import linentowel from '../assets/linentowel/maintowel.jpg'
import largeglassbox from '../assets/largeglassbox/largeglassmain.jpg'
import star from '../assets/stars.png'
function Item() {
  return (
    <div className="item8">
      <div className='upper4'>
      <div className="image-container">
        <img src={mat} className="image" style={{height:300, width:300}}/>
        <div className="hover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className='searchbutton1'>VIEW ALL</div>
        <div className="hoveritemtext">
          <div className="productname">
             Round Jute Placemat
          </div>
          <div className="stars">
            <img src={star}/>
          </div>
          <div className="priceproduct">
               30$
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={basket} className="image" style={{height:300, width:300}}/>
        <div className="hover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className='searchbutton1'>VIEW ALL</div>
        <div className="hoveritemtext">
          <div className="productname">
             Round Jute Placemat
          </div>
          <div className="stars">
            <img src={star}/>
          </div>
          <div className="priceproduct">
               30$
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={glassbox} className="image" style={{height:300, width:300}}/>
        <div className="hover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className='searchbutton1'>VIEW ALL</div>
        <div className="hoveritemtext">
          <div className="productname">
             Round Jute Placemat
          </div>
          <div className="stars">
            <img src={star}/>
          </div>
          <div className="priceproduct">
               30$
          </div>
        </div>
      </div>
      <div className="image-container">
      <img src={plate} className="image" style={{height:300, width:300}}/>
        <div className="hover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className='searchbutton1'>VIEW ALL</div>
        <div className="hoveritemtext">
          <div className="productname">
             Round Jute Placemat
          </div>
          <div className="stars">
            <img src={star}/>
          </div>
          <div className="priceproduct">
               30$
          </div>
        </div>
      </div>
      </div>
      <div className="lower4">
      <div className="image-container">
      <img src={metalbasket} className="image" style={{height:300, width:300}}/>
        <div className="hover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className='searchbutton1'>VIEW ALL</div>
        <div className="hoveritemtext">
          <div className="productname">
             Round Jute Placemat
          </div>
          <div className="stars">
            <img src={star}/>
          </div>
          <div className="priceproduct">
               30$
          </div>
        </div>
      </div>
      <div className="image-container">
      <img src={jutebag} className="image" style={{height:300, width:300}}/>
        <div className="hover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className='searchbutton1'>VIEW ALL</div>
        <div className="hoveritemtext">
          <div className="productname">
             Round Jute Placemat
          </div>
          <div className="stars">
            <img src={star}/>
          </div>
          <div className="priceproduct">
               30$
          </div>
        </div>
      </div>
      <div className="image-container">
      <img src={linentowel} className="image" style={{height:300, width:300}}/>
        <div className="hover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className='searchbutton1'>VIEW ALL</div>
        <div className="hoveritemtext">
          <div className="productname">
             Round Jute Placemat
          </div>
          <div className="stars">
            <img src={star}/>
          </div>
          <div className="priceproduct">
               30$
          </div>
        </div>
      </div>
      <div className="image-container">
      <img src={largeglassbox} className="image" style={{height:300, width:300}}/>
        <div className="hover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className='searchbutton1'>VIEW ALL</div>
        <div className="hoveritemtext">
          <div className="productname">
             Round Jute Placemat
          </div>
          <div className="stars">
            <img src={star}/>
          </div>
          <div className="priceproduct">
               30$
          </div>
        </div>
      </div>
      </div>
      </div>
    );
}
export default Item
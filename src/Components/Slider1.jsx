import React from 'react'
import '../index.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide,Fade } from 'react-slideshow-image'
import minicouch from '../assets/minicouch.png'
import table from '../assets/Table.png'
import chair from '../assets/image2.png'
import { Link } from 'react-router-dom'

const slides = [
    <div className="chair-content" key={1}>
        <div>
      <img src={chair} style={{height : '25rem'}} />
      </div>
      <div className='chair-content2'>
       <div className="hotdeals">
        <p>Hot Deals This Week</p>
       </div>
       <div className="Sale">
        <p className='saletext'>SALE 50% OFF<br></br>MODERN FURNITURE</p>
       </div>
       <div className="chairbutton">
       <Link to="/detailchair"> <button className='searchbutton'>VIEW NOW</button></Link>
       </div>
      </div>
    </div>,
    <div className="table-content" key={2}>
        <div><img src={table} style={{ height : '25rem' }}/></div>
        <div className='chair-content2'>
       <div className="hotdeals">
        <p>Hot Deals This Week</p>
       </div>
       <div className="Sale">
        <p className='saletext'>SALE 50% OFF<br></br>MODERN FURNITURE</p>
       </div>
       <div className="chairbutton">
       <Link to="/detailchair"> <button className='searchbutton'>VIEW NOW</button></Link>
       </div>
      </div>
      
    </div>,
       <div className="minicouch-content" key={3}>
       <div><img src={minicouch} style={{ height : '25rem' }}/></div>
       <div className='chair-content2'>
       <div className="hotdeals">
        <p>Hot Deals This Week</p>
       </div>
       <div className="Sale">
        <p className='saletext'>SALE 50% OFF<br></br>MODERN FURNITURE</p>
       </div>
       <div className="chairbutton">
       <Link to="/detailchair"> <button className='searchbutton'>VIEW NOW</button></Link>
       </div>
      </div>
       </div>, 
  ];

  const ImageSlider = () => {
    return (
      <div className="slider-container">
        <Slide images={slides}>
          {slides.map((slide, index) => (
            <div key={index} className="each-slide">
              {slide}
            </div>
          ))}
        </Slide>
      </div>
    );
  };
  
  export default ImageSlider;
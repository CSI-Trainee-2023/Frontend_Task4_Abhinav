import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
function Header() {
  return (
    <div className='navbar'>
      <div className='menu-icon'>
        <FaBars />
      </div>
        <ul className='navbar-menu'>
            <li><Link to='/'><button className='homebutton'>Home</button></Link></li>
            <li>Store</li>
            <li>Accessories</li>
            <li>Brand</li>
            <li>Pages</li>
            <li>About Us</li>
            <li>News</li>
            <li>Contact us</li>
        </ul>
    </div>
  )
}

export default Header
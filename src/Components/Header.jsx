import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
        <ul className='navbar-menu'>
            <li><Link to='/'><button className='homebutton'>Home</button></Link></li>
            <li>Store</li>
            <li>Accessories</li>
            <li>Brand</li>
            <li>Pages</li>
            <li>About Us</li>
            <li>News</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header
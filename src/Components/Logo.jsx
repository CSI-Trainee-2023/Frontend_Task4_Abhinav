import React from 'react'
import '../index.css'
import logoimage from '../assets/logo.png';
import profileimg from '../assets/profileicon.jpg'
import addtocart from '../assets/addtocart.png'
import { Link } from 'react-router-dom';
function Logo(){
    return(
       <div className="upperheader">
            <div className="logoimage">
            <Link to="/"><img src={logoimage} style={{ width: '9.375rem', height: '3.125rem' }}/></Link>
            </div>
            <div className="rightupper">
           <div className="profileicon">
                 <img src={profileimg} style={{ width: 50, height: 50 }} />
           </div>
           <Link to="/cart"><div className="addtocart">
                <img src={addtocart}/>
           </div>
           </Link>
           </div>
           </div>
    )
}

export default Logo
import React from 'react'
import '../index.css'
import logoimage from '../assets/logo.png';
import profileimg from '../assets/profileicon.jpg'
import addtocart from '../assets/addtocart.png'
function Logo(){
    return(
       <div className="upperheader">
            <div className="logoimage">
                <img src={logoimage} style={{ width: 150, height: 50 }}/>
            </div>
            <div className="rightupper">
           <div className="profileicon">
                 <img src={profileimg} style={{ width: 50, height: 50 }} />
           </div>
           <div className="addtocart">
                <img src={addtocart}/>
           </div>
           </div>
           </div>
    )
}

export default Logo
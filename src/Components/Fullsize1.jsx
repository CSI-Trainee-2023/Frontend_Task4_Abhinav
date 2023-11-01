import React from 'react'
import '../index.css'
import bedsheet1 from '../assets/bedsheetfinal.png'

function FullSize() {
    return(
    <div className="bedsheet">
        <div><img src={bedsheet1} style={{width : '100%'}}/></div>
    </div>
    )
}
export default FullSize
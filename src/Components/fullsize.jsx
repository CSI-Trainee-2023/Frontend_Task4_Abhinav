import React from 'react'
import '../index.css'
import bedsheet from '../assets/bedsheet.png'

function FullSize() {
    return(
    <div className="bedsheet">
        <div><img src={bedsheet} style={{width : '100%'}}/></div>
    </div>
    )
}
export default FullSize
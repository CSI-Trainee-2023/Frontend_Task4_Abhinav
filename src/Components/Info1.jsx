import React,{useState} from 'react'
import '../index.css'
import chairhm from '../assets/chairhm.jpeg'
import stool from '../assets/stoolhm2.jpg'
import pot from '../assets/Terrocotavase/index.jpg'
import { Link } from 'react-router-dom'
import Infofunct from './infofunct'
function Info1() {
    return(
        <div className="Info1">
               <div><Infofunct img={stool} text="INY VINTAGE"/></div> 
               <div><Infofunct img={pot} text="LARGE TERRACOTA VASE"/></div>
            </div>
    )
}

export default Info1
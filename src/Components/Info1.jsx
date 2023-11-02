import React,{useState} from 'react'
import '../index.css'
import chairhm from '../assets/chairhm.jpeg'
import stool from '../assets/image4.png'
import pot from '../assets/image31.png'
import { Link } from 'react-router-dom'
import Infofunct from './infofunct'
function Info1() {
    return(
        <div className="Info1">
               <div className="part1a">
               <Infofunct img={pot} text="INY VINTAGE"/>
               </div>
               <div className="part1b">
               <Infofunct img={stool} text="LARGE VASE"/>
               </div>
        </div>
    )
}

export default Info1
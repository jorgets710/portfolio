import React from "react";
import './about.css'
import Coding from '../../../assets/coding.png'


 export default function About (params) {
     
    return(
        <div className="about-gral">
            <div className='about-info'>
            Hola, Soy Veizaga Arce, Jorge Luis 👋 y bienvenidos!
                    <br />
                    <br />
            Soy desarrollador Full Stack.
                    
            </div>
            <div className='about-photo'>
            
            <img src={Coding} alt="codigo" className="photo" />

            </div>
       
        </div>
    )
 }
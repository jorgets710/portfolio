import React from "react"
import About from "./about/index"
import Contact from "./contact"
import Skills from "./skill"
import Proyect from "./proyect"
import './home.css'
import Separador from '../common/separator/index'
export default function Home(params) {
    return (
        <div className="home-gral">
            <div id="about">
                <About></About>
            </div>
            <Separador></Separador>
            <div id="skills">
                <Skills></Skills>
            </div>
            <Separador></Separador>
            <div id="proyectos">
                <Proyect></Proyect>
            </div>
            <Separador></Separador>
            <div id="contact">
                <Contact></Contact>
            </div>
            
            
        </div>
    )
}
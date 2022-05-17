import React from "react"

import { Contacts } from "../../../data/contact"
import './contact.css'



export default function Contact(params) {
    return (
        <div className="contact-gral">
            <h1>Contacto</h1>
            <div className="contact-about"><p>¿Quéres ponerte en contacto? podes contactarme en alguna de las siguientes plataformas</p></div>
            <div className="list-contact">
                
                
                {
                    Contacts.map((items, index) =>
                        <div className="card-contact" key={index}>
                            <div>
                                <a href={items.link} target="_blank" rel="noreferrer">
                                    <img src={process.env.PUBLIC_URL + `/assets/icons/${items.icon}`} alt="gg" style={{ height: " 80px" }}>

                                    </img>
                                </a>

                            </div>
                            
                        </div>
                    )
                }
                
            </div>



        </div>
    )
}
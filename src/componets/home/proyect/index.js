import React from 'react'
import './proyect.css'
import { Proyects } from '../../../data/projects'
export default function Proyect (params) {
    return(
        <div className='proyect-gral'>
            <h1>Proyectos</h1>
            <div className='list-proyect'>
                {Proyects.map((items ,index) =>
                    <div key={index}>
                        <div> <h3>{items.title}</h3></div>
                        <div> <p>{items.about}</p></div>
                        <div><a href={items.link} target="_blank" rel="noreferrer"> Ver el Proyecto </a> </div>
                        

                    </div>
                    )}

            </div>

        </div>
    )
}
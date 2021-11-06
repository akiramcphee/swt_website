import React from 'react'
import './Project_cards.css'
import Getting_scammed from '../../images/Getting_scammed.JPG'

console.log(Getting_scammed);

export default function Project_cards() {
    return (
        <div>
            <div className = "project-border-color">
                <div className = "project-image">   
                     <img src={Getting_scammed} alt="SWT"></img>
                </div>
                <h3 className = "project_name">Project Name</h3>
            </div>
        </div>
    )
}

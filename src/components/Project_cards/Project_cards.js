import React from 'react'
import './Project_cards.css'
import Getting_scammed from '../../images/Getting_scammed.JPG'
import { Link } from 'react-router-dom'

console.log(Getting_scammed);

export default function Project_cards(props) {
    return (
        <div className = "cards">
            <div className = "project-border-color">
                <Link to={`/log/${props.projectName}`}>
                <div className = "project-image">   
                     <img src={props.background} alt="SWT"></img>
                </div>
                </Link>
                <div className = "project-cards-text">
                    <h3 className = "project_name">{props.projectName}</h3>
                    <p className= "project-cards-brief-description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './Project_cards.css'
import Getting_scammed from '../../images/Getting_scammed.JPG'
import { Link } from 'react-router-dom'

console.log(Getting_scammed);

export default function Project_cards(props) {
    let log = require('../../data.json');
    const photo = require(`../../images/${log['project-name'][props.projectName].background}`).default;
    return (
        <div className = "cards">
            <div className = "project-border-color">
                <Link to={`/log/${props.projectName}`}>
                <div className = "project-image">   
                     <img className = "card-image" src={photo} alt="SWT"></img>
                </div>
                </Link>
                <div className = "project-cards-text">
                    <h3 className = "project_name">{log['project-name'][props.projectName]['full-name']}</h3>
                    <p className= "project-cards-brief-description">{log['project-name'][props.projectName]['description']}</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Project_cards from '../components/Project_cards/Project_cards'
import BigProjectCard from '../components/BigProjectCard/BigProjectCard';
import './Projects.css'


export default function Projects() {
    return (
        <div className = "profile">   
			<div className="row">
                <div className = "our_sensors">
                    <div>Our Sensors</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BigProjectCard projectName='piezo'/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BigProjectCard projectName='tribo'/>
                </div>
            </div>
		</div>
    )
}

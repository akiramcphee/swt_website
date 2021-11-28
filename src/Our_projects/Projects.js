import React from 'react'
import Project_cards from '../components/Project_cards/Project_cards'
import BigProjectCard from '../components/BigProjectCard/BigProjectCard';
import './Projects.css'


export default function Projects() {
    return (
        <div className = "profile">   
			<div className="row">
                <div className = "our_projects">
                    <h1>Our Projects</h1>
                </div>            
            </div>
            <div className="row">
                <div className="col-12">
                    <div className = "read-more">
                        <h2>Learn about our sensors</h2>
                        <i class="fas fa-chevron-down"></i>
                    </div>
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

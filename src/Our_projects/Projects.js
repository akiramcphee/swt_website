import React from 'react'
import Project_cards from '../components/Project_cards/Project_cards'
import './Projects.css'

export default function Projects() {
    return (
        <div className = "profile">
			<div className="row">
                <div className = "our_projects">
                    <h1>Our Projects</h1>
                </div>
                    <p className = "our_projects_description">Wearable technologies have the potential to revolutionise many different aspects of our lives. Here are some we have explored.</p>
                
            </div>
			<div className="row">
                <div className="col-4">
                    <Project_cards/>
                </div>
                <div className="col-4">
                    <Project_cards/>
                </div>
                <div className="col-4">
                    <Project_cards/>
                </div>
            </div>
		</div>
    )
}

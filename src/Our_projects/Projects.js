import React from 'react'
import Project_cards from '../components/Project_cards/Project_cards'
import './Projects.css'
import speechImage from '../images/speech.jpeg'
import gloveImage from '../images/glove.jpeg'
import pulseImage from '../images/pulse.jpeg'

console.log(speechImage);
console.log(gloveImage);
console.log(pulseImage);


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
                    <Project_cards projectName='speech'/>  
                </div>
                <div className="col-4">
                    <Project_cards projectName='glove'/>
                </div>
                <div className="col-4">
                    <Project_cards projectName='pulse'/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className = "read-more">
                        <h2>Scroll Down to Read More</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <Project_cards projectName='speech'/>  
                </div>
                <div className="col-4">
                    <Project_cards projectName='glove'/>
                </div>
                <div className="col-4">
                    <Project_cards projectName='pulse'/>
                </div>
            </div>

		</div>
    )
}

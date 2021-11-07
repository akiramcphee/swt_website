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
    const speech = {
        name: "Speech Recognition",
        background: speechImage,
        description: "Add something here for speech"
    }
    const glove = {
        name: "Smart Glove",
        background: gloveImage,
        description: "Add something here for glove"
    }
    const pulse = {
        name: "Pulse",
        background: pulseImage,
        description: "Add something here for pulse"
    }

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
                    <Project_cards projectName={speech.name} background={speech.background} description={speech.description}/>
                    
                </div>
                <div className="col-4">
                    <Project_cards projectName={glove.name} background={glove.background} description={glove.description}/>
                </div>
                <div className="col-4">
                    <Project_cards projectName={pulse.name} background={pulse.background} description={speech.description}/>
                </div>
            </div>

		</div>
    )
}

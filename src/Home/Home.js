import React from 'react'
// import Navbar from '../components/Navbar'
// import Heading from '../components/Heading/Heading';
import HomeText from '../components/Homepage_Title/HomeText'
import './Home.css'
import team from '../images/team.jpg'
import { Button } from '../components/Button/Button';
import Project_cards from '../components/Project_cards/Project_cards'

console.log(team);

export default function Home() {

    return (
        <div>
            <div className = "back-home">
            <div className="row"></div>
                <div className="row">
                    <div class="home-swt-text"><HomeText/></div>
                </div>
                <div className="row">
                    <div class="home-swt-button"><Button className = "pitch-button" buttonStyle='btn--outline--large' page='pitch'>VIEW THE PITCH</Button></div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-12">
                    <div className = "read-more">
                        <i class="fas fa-chevron-up"></i>
                        <h2>Our Projects</h2>
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
            <div className="row">
                <div className="col-12">
                    <div className = "read-more">
                        <i class="fas fa-chevron-up"></i>
                        <h2>Click on any of the images above to see our progress log</h2>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

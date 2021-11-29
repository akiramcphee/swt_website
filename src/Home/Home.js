import React from 'react'
import HomeText from '../components/Homepage_Title/HomeText'
import './Home.css'
import team from '../images/team.jpg'
import ProjectCards from '../components/Project_cards/Project_cards'
import { Link } from 'react-router-dom'


console.log(team);

export default function Home() {

    return (
        <div>
            <div className = "back-home">
            <div className="row"></div>
                <div className="row">
                    <div class="home-swt-text"><HomeText/></div>
                </div>
                
            </div>
                <p className = "our_projects_description">Wearable technologies have the potential to revolutionise many different aspects of our lives. Here are some we have explored<Link className="keht" to='../keht'>.</Link> </p>              
            <div className="row">
            </div>
            <div className="row">
                <div className="col-4">
                    <ProjectCards projectName='speech'/>  
                </div>
                <div className="col-4">
                    <ProjectCards projectName='glove'/>
                </div>
                <div className="col-4">
                    <ProjectCards projectName='pulse'/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className = "log-instructions">
                        <i class="fas fa-chevron-up"></i>
                        <h2>Click on any of the images above to see our progress log</h2>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

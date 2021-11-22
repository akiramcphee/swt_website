import React from 'react'
// import Navbar from '../components/Navbar'
// import Heading from '../components/Heading/Heading';
import HomeText from '../components/Homepage_Title/HomeText'
import './Home.css'
import team from '../images/team.jpg'
import { Button } from '../components/Button/Button';

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
        </div>
    )
    
}

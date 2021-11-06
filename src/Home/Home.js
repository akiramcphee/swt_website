import React from 'react'
// import Navbar from '../components/Navbar'
// import Heading from '../components/Heading/Heading';
import HomeText from '../components/Homepage_Title/HomeText'
import './Home.css'
import team from '../images/team.jpg'

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
        </div>
    )
}

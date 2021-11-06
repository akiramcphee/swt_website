import React from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading/Heading';
import Homepage from '../components/Homepage_Title/Homepage'
import './Home.css'
import team from '../images/team.jpg'

console.log(team);

export default function Home() {
    return (
        <div>
            <div className="row">

            <div className="col-12">
                <div className = "background_image">
                    <img src={team} alt="SWT"></img>
                </div>
            </div>
            
            </div>
            
            <div>
                <Homepage></Homepage>
            </div>
            
        </div>
    )
}

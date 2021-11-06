import React from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading/Heading';
import './Home.css'
import team from '../images/team.jpg'

console.log(team);

export default function Home() {
    return (
        <div>
            {/* <div class="header">
                <Navbar></Navbar>
            </div>
            <div className="row">
                

            <div className="col-12">
                <div className = "background_image">
                    <img src={team} alt="SWT"></img>
                </div>
            </div>
            
            </div> */}
            <div className='headingBox'>
                <Heading></Heading>
            </div>
            
            
        </div>
    )
}

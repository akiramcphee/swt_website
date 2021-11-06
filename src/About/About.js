import React from 'react'
import Navbar from '../components/Navbar'
import './About.css'
import osckilloscope from '../images/about_image.jpeg'

console.log(osckilloscope);

export default function About() {
    return (
        <div>
            <div className="header">
                <Navbar></Navbar>
            </div>
            <div className = "col-6">
                <div className ="about_image">
                    <img src={osckilloscope} alt="osckilloscope"></img>
                </div>
            </div>
            <div className = "col-6">
                <div className ="about_text">
                    <h1>About</h1>
                    <h1>Smart Wearable Tech</h1>
                    <h3>Mission Statement</h3>
                </div>
            </div>
        </div>
    )
}

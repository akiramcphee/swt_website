import React from 'react'
import LogPost from '../components/LogPost';
import Navbar from '../components/Navbar'
import stuff from '../images/stuff.jpg'
import './Log.css'

console.log(stuff);

export default function Log() {
    return (
        <div className = "back">
            <div className="header">
                <Navbar></Navbar>
            </div>
            <div className="row"></div>
            <div className="row">
                <div class="project">Project</div>
            </div>
            <div className="row">
                <div class="container">
                    <div className = "col-6">
                        <LogPost/>
                    </div>
                    <div className = "col-6">
                        <LogPost/>
                    </div>
                </div>
            </div>
        </div>
    )
}


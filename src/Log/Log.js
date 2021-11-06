import React from 'react'
import Navbar from '../components/Navbar'
import stuff from '../images/stuff.jpg'
import './Log.css'

console.log(stuff);

export default function Log() {
    return (
        <div>
            <div className="header">
                <Navbar></Navbar>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className = "background_image">
                        <img src={stuff} alt="SWT"></img>
                        <div class="bottom-left">Project</div>
                        <div class="card-one">Hi</div>
                        <div class="card-two">
                            Hi2
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


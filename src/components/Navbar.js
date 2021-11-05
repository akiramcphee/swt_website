import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <div className="nav">
                <div className="bar"></div>
                <div className = "pages">
                    <span className="swt">Smart Wearable Tech</span>
                    <span className="about">About</span>
                    <span class="speech">Speech Recognition</span>
                    <span className="glove">Smart Glove</span>
                    <div className="apply"> Apply </div>
                </div>
                <div className = "burger">
                    <div className="burger1"></div>
                    <div className="burger2"></div>
                    <div className="burger3"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

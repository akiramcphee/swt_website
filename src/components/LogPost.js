import React from 'react'
import './LogPost.css'
import Getting_scammed from '../images/Getting_scammed.JPG'

console.log(Getting_scammed);

export default function LogPost() {
    return (
        <div>
            <div className = "background-border">
                <h3>November 2021</h3>
                <p>Brief description of current lab/software work and findings</p>
                <div className = "log-image">
                    <img src={Getting_scammed} alt="SWT"></img>
                </div>
            </div>
        </div>
    )
}

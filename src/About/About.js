import React from 'react'
import './About.css'
import osckilloscope from '../images/about_image.jpeg'
import unswLogo from '../images/unsw_logo.png'

console.log(osckilloscope);

export default function About() {
  return (
    <div>
      <div className = "row">
        <div className = "col-6">
          <img className = "about-image" src={osckilloscope} alt="osckilloscope"></img>
        </div>
        <div className = "col-6">
          <div className ="about_text">
            <h1 className = "about-main">About</h1>
            <h1 className = "about-main">Smart Wearable Tech</h1>
            <h3>Mission Statement</h3>
          </div>
        </div>
      </div>
      <div className = "row">
        <div className = "unsw-logo">
        <img className = "unsw-logo-img" src={unswLogo}></img>
        </div>
      </div>
    </div>
    )
}

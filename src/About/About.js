import React from 'react'
import './About.css'
import osckilloscope from '../images/egypt_cat.jpg'

console.log(osckilloscope);

export default function About() {
  return (
    <div class="about">
      <div className = "row">
        <div className = "col-4">
          <img className = "about-image" src={osckilloscope} alt="osckilloscope"></img>
        </div>
        <div className = "col-4">
          <div className ="about_text">
            <h1 className = "about-main">the keht in the het</h1>
            <p>my name is keht</p>
            <p>i hav da might</p>
            <p>for egypt keht</p>
            <p>will own dis site</p>
            <p>i watch sensaw</p>
            <p>n see it lie</p>
            <p>and wen it doz</p>
            <p>i watch you cri</p>
          </div>
        </div>
        <div className = "col-4">
          <img className = "about-image" src={osckilloscope} alt="osckilloscope"></img>
        </div>
      </div>
      <div className = "row">
        <div className = "col-2">
          <img src="http://nekofont.upat.jp/font/l/109.jpg" alt="osckilloscope"/>
        </div>
        <div className = "col-1">
         <img src="http://nekofont.upat.jp/font/l/101.jpg" alt="osckilloscope"/>
        </div>
        <div className = "col-1">
          <img src="http://nekofont.upat.jp/font/l/111.jpg" alt="osckilloscope"/>
        </div>
        <div className = "col-2">
          <img src="http://nekofont.upat.jp/font/l/119.jpg" alt="osckilloscope"/>
        </div>
        <div className = "col-2">
          <img src="http://nekofont.upat.jp/font/l/109.jpg" alt="osckilloscope"/>
        </div>
        <div className = "col-1">
         <img src="http://nekofont.upat.jp/font/l/101.jpg"alt="osckilloscope" />
        </div>
        <div className = "col-1">
          <img src="http://nekofont.upat.jp/font/l/111.jpg" alt="osckilloscope" />
        </div>
        <div className = "col-2">
          <img src="http://nekofont.upat.jp/font/l/119.jpg" alt="osckilloscope"/>
        </div>
      </div>
    </div>
    )
}

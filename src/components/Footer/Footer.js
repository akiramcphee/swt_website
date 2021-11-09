import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className = "footer">
            <div className="col-6">
                <div className="swt-footer-text">
                    <p>Smart Wearable Tech</p>
                </div>
            </div>
            <div className="col-6">
                <div className="footer-logo">
                <img 
                    className='swt-logo-footer' 
                     src='../../logo_white.svg'
                    alt='Smart Wearable Tech logo'
                />
                </div> 
            </div>
                   
        </div>
    )
}

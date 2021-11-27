import React from 'react'
import './Footer.css'

export default function Footer() {
	return (
		<div className = "footer">
			<div className="col-7">
				<div className="swt-footer-text">
					<p>Smart Wearable Tech</p>
				</div>  
			</div>
			<div className="col-5">
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

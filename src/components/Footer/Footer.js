import React from 'react'
import './Footer.css'
import logo from './logo_white.svg'


export default function Footer() {
	return (
		<div className = "footer">
			<div className = 'row'>
				<div className="col-12">
					<div className="footer-logo">
					<img 
						className='swt-logo-footer' 
						src={logo}
						alt='Smart Wearable Tech logo'
					/>
					</div> 
				</div>	
			</div>	
			<div className = 'row'>
				<div className="col-12">
					<div className="swt-footer-text">
						<p>Smart Wearable Tech</p>
					</div>  
				</div>
			</div>	
		</div>
	)
}

import React from 'react'
import LogPost from '../components/LogPost/LogPost';
import stuff from '../images/stuff.jpg'
import './Log.css'

console.log(stuff);

export default function Log() {
	return (
		<div className = "back">
			<div className="row"></div>
			<div className="row">
				<div class="project">Project</div>
			</div>
			<div className="row">
				<div class="container">
					<div className = "col-6">
							<LogPost week = "week_4"/>
					</div>
					<div className = "col-6">
							<LogPost week = "week_3"/>
					</div>
					</div>
				</div>
				<div className="row">
				<div class="container">
					<div className = "col-6">
							<LogPost week = "week_2"/>
					</div>
					<div className = "col-6">
							<LogPost week = "week_1"/>
					</div>
					</div>
				</div>
		</div>
	)
}


import React from 'react'
import LogPost from '../components/LogPost/LogPost';
import stuff from '../images/stuff.jpg'
import './Log.css'

console.log(stuff);

export default function Log(props) {
	const projectName = props.project;
	let log = require('../data.json');
	return (
		<div className = "back">
			<div className="row"></div>
			<div className="row">
				<div class="project">{log['project-name'][projectName]['full-name']}</div>
			</div>
			<div className="row">
				<div class="container">
					<div className = "col-12">
						<LogPost project= {projectName} post = "4"/>
					</div>
				</div>
			</div>
			<div className="row">
				<div class="container">
					<div className = "col-12">
						<LogPost project= {projectName} post = "3"/>
					</div>
				</div>
			</div>
			<div className="row">
				<div class="container">
					<div className = "col-12">
						<LogPost project= {projectName} post = "2"/>
					</div>
				</div>
			</div>
			<div className="row">
				<div class="container">
					<div className = "col-12">
							<LogPost project= {projectName} post = "1"/>
					</div>
				</div>
			</div>
		</div>
	)
}


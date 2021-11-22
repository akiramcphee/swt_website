import React from 'react'
import './Profiles.css'
//import Navbar from '../components/Navbar/Navbar'

export default function Profiles() {
	return (
		<div className = "profile">
			<div className="row">
					<div className="col-12">
						<div className = "team_background">
							<h1 className = "Team">The Team</h1>
						</div>
					</div>
			</div>
			<div className="row">
					<div className="col-12">
						<div className = "profile_background">
							<div className = "row">
								<div className="col-4">
									<h2 className = "Team">Prof. Chun H. Wang</h2>
								</div>
								<div className="col-4">
									<h2 className = "Team">Dr Shuhua Peng</h2>
								</div>
								<div className="col-4">
									<h2 className = "Team">Yuyan Yu</h2>
								</div>
							</div>
							<div className = "row">
								<div className="col-4">
									<h2 className = "Team">Student</h2>
								</div>
								<div className="col-4">
									<h2 className = "Team">Student</h2>
								</div>
								<div className="col-4">
									<h2 className = "Team">Student</h2>
								</div>
							</div>
							<div className = "row">
								<div className="col-4">
									<h2 className = "Team">Student</h2>
								</div>
								<div className="col-4">
									<h2 className = "Team">Student</h2>
								</div>
								<div className="col-4">
									<h2 className = "Team">Student</h2>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
	)
}

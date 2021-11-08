import React from 'react'
import './Profiles.css'
import Navbar from '../components/Navbar'

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
									<h1 className = "Team">Chunder</h1>
								</div>
								<div className="col-4">
									<h1 className = "Team">Yuyan</h1>
								</div>
								<div className="col-4">
									<h1 className = "Team">Spectron</h1>
								</div>
							</div>
							<div className = "row">
								<div className="col-4">
									<h1 className = "Team">Student</h1>
								</div>
								<div className="col-4">
									<h1 className = "Team">Student</h1>
								</div>
								<div className="col-4">
									<h1 className = "Team">Student</h1>
								</div>
							</div>
							<div className = "row">
								<div className="col-4">
									<h1 className = "Team">Student</h1>
								</div>
								<div className="col-4">
									<h1 className = "Team">Student</h1>
								</div>
								<div className="col-4">
									<h1 className = "Team">Student</h1>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
	)
}

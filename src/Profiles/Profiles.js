import React from 'react'
import './Profiles.css'
//import Navbar from '../components/Navbar/Navbar'
import ProfileCard from '../components/ProfileCard/ProfileCard'
import egyptcat from '../images/egypt_cat.jpg'

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
		 							<h2 className = "Team">Prof. Chun Wang</h2>
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
		 							<h2 className = "Team">Taylor Chan</h2>
		 						</div>
		 						<div className="col-4">
		 							<h2 className = "Team">David Du</h2>
		 						</div>
		 						<div className="col-4">
		 							<h2 className = "Team">Andrew Kim</h2>
		 						</div>
		 					</div>
		 					<div className = "row">
		 						<div className="col-4">
		 							<h2 className = "Team">Akira McPhee</h2>
		 						</div>
		 						<div className="col-4">
		 							<h2 className = "Team">Sutapa Saha</h2>
		 						</div>
		 						<div className="col-4">
		 							<h2 className = "Team">Karan Singh</h2>
		 						</div>
		 					</div>
		 					<div className = "row">
		 						<div className="col-4">
		 							<h2 className = "Team">Krishne Thayaparan</h2>
		 						</div>
		 						<div className="col-4">
		 							<h2 className = "Team">Megan Wong</h2>
		 						</div>
		 						<div className="col-4">
		 							<h2 className = "Team">Alice Zhao</h2>
		 						</div>
		 					</div>
		 				</div>
		 			</div>
		 	</div>
		 </div>
	)
}

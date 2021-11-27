import React from 'react'
import './Profiles.css'
//import Navbar from '../components/Navbar/Navbar'
import egyptcat from '../images/egypt_cat.jpg'
import ProfileCardStudents from '../components/ProfileCard/ProfileCardStudents'
import ProfileCardAcademic from '../components/ProfileCard/ProfileCardAcademics'



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
		 						<ProfileCardAcademic name='Chun Wang' degree = '' role = 'Academic' image = {egyptcat}/>
		 					</div>
		 					<div className="col-4">
		 						<ProfileCardAcademic name='Shuhua Peng' degree = '' role = 'Academic' image = {egyptcat}/>
		 					</div>
		 					<div className="col-4">
							 <ProfileCardAcademic name='Yuyan Yu' degree = '' role = 'Academic' image = {egyptcat}/>
	 						</div>
	 					</div>
		 				<div className = "row">
		 					<div className="col-4">
								<ProfileCardStudents name='Taylor Chan' degree = 'Mechatronics/Biomedical Engineering' role = 'Software Team' image = {egyptcat}/>
		 					</div>
							<div className="col-4">
							 	<ProfileCardStudents name='Andrew Kim ' degree = 'Mechatronics/Biomedical Engineering' role = 'Software Team' image = {egyptcat}/>
	 						</div>		 						<div className="col-4">
								<ProfileCardStudents name='Akira McPhee ' degree = 'Mechatronics/Biomedical Engineering' role = 'Software Team' image = {egyptcat}/>
		 					</div>
		 				</div>
		 				<div className = "row">
						 	<div className="col-4">
								<ProfileCardStudents name='Dave Du' degree = 'Mechanical/Biomedical Engineering' role = 'Testing Team' image = {egyptcat}/>
	 						</div>
	 						<div className="col-4">
							 	<ProfileCardStudents name='Sutapa Saha' degree = 'Science' role = 'Testing Team' image = {egyptcat}/>
	 						</div>
							<div className="col-4">
								<ProfileCardStudents name='Karan Singh' degree = 'Electrical Engineering' role = 'Testing Team' image = {egyptcat}/>
							</div>
		 
						</div>
						<div className = "row">
							<div className="col-4">
								
									<ProfileCardStudents name='Krishne Thayaparan' degree = 'Medicine' role = 'Testing Team' image = {egyptcat}/>
							</div>

								<div className="col-4">
									<ProfileCardStudents name='Megan Wong' degree = 'Electrical Engineering' role = 'Testing Team' image = {egyptcat}/>
								</div>
								<div className="col-4">
									<ProfileCardStudents name='Alice Zhao' degree = 'Advanced Maths/Material Science'  role = 'Testing Team' image = {egyptcat}/>
								</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

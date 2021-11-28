import React from 'react'
import './Profiles.css'
//import Navbar from '../components/Navbar/Navbar'
import egyptcat from '../images/egypt_cat.jpg'
import Chun from './profileImages/ChunWang.jpg'
import Shuhua from './profileImages/ShuhuaPeng.png'
import Yuyan from './profileImages/YuyanYu.jpg'
import Taylor from './profileImages/TaylorChan.jpg'
import Andrew from './profileImages/AndrewKim.jpg'
import Akira from './profileImages/meowmeow.png'
import David from './profileImages/DavidDu.jpg'
import Sutapa from './profileImages/SutapaSaha.jpg'
import Megan from './profileImages/MeganWong.jpeg'
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
		 						<ProfileCardAcademic name='Chun Wang' degree = '' role = 'Academic' image = {Chun}/>
		 					</div>
		 					<div className="col-4">
		 						<ProfileCardAcademic name='Shuhua Peng' degree = '' role = 'Academic' image = {Shuhua}/>
		 					</div>
		 					<div className="col-4">
							 <ProfileCardAcademic name='Yuyan Yu' degree = '' role = 'Academic' image = {Yuyan}/>
	 						</div>
	 					</div>
		 				<div className = "row">
		 					<div className="col-4">
								<ProfileCardStudents name='Taylor Chan' degree = 'Mechatronics/Biomedical Engineering' role = 'Software Team' image = {Taylor}/>
		 					</div>
							<div className="col-4">
							 	<ProfileCardStudents name='Andrew Kim ' degree = 'Mechatronics/Biomedical Engineering' role = 'Software Team' image = {Andrew}/>
	 						</div>		 						
							<div className="col-4">
								<ProfileCardStudents name='Akira McPhee ' degree = 'Mechatronics/Biomedical Engineering' role = 'Software Team' image = {Akira}/>
							 </div>
		 				</div>
		 				<div className = "row">
						 	<div className="col-4">
								<ProfileCardStudents name='David Du' degree = 'Mechanical/Biomedical Engineering' role = 'Testing Team' image = {David}/>
	 						</div>
	 						<div className="col-4">
							 	<ProfileCardStudents name='Sutapa Saha' degree = 'Science' role = 'Testing Team' image = {Sutapa}/>
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
									<ProfileCardStudents name='Megan Wong' degree = 'Electrical Engineering' role = 'Testing Team' image = {Megan}/>
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

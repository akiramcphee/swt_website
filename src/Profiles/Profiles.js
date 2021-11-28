import React from 'react'
import './Profiles.css'
import Chun from './profileImages/ChunWang.jpg'
import Shuhua from './profileImages/ShuhuaPeng.png'
import Yuyan from './profileImages/YuyanYu.jpg'
import Taylor from './profileImages/TaylorChan.jpg'
import Andrew from './profileImages/AndrewKim.jpg'
import Akira from './profileImages/meowmeow.png'
import David from './profileImages/DavidDu.jpg'
import Sutapa from './profileImages/SutapaSaha.jpg'
import Karan from './profileImages/KaranSingh.jpg'
import Krishne from './profileImages/KrishneThayaparan.jpg'
import Megan from './profileImages/MeganWong.jpeg'
import Alice from './profileImages/AliceZhao.jpg'
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
		 						<ProfileCardAcademic name='Prof. Chun Wang' degree = '' role = 'Head of the School of Mechanical and Manufacturing Engineering' image = {Chun}/>
		 					</div>
		 					<div className="col-4">
		 						<ProfileCardAcademic name='Dr. Shuhua Peng' degree = '' role = 'ARC DECRA Fellow, School of Mechanical and Manufacturing Engineering' image = {Shuhua}/>
		 					</div>
		 					<div className="col-4">
							 <ProfileCardAcademic name='Yuyan Yu' degree = '' role = 'PhD Candidate, School of Mechanical and Manufacturing Engineering' image = {Yuyan}/>
	 						</div>
	 					</div>
		 				<div className = "row">
		 					<div className="col-4">
								<ProfileCardStudents name='Taylor Chan' degree = 'Mechatronics and Biomedical Engineering' role = 'Software Team' image = {Taylor}/>
		 					</div>
							<div className="col-4">
							 	<ProfileCardStudents name='Andrew Kim ' degree = 'Mechatronics and Biomedical Engineering' role = 'Software Team' image = {Andrew}/>
	 						</div>		 						
							<div className="col-4">
								<ProfileCardStudents name='Akira McPhee ' degree = 'Mechatronics and Biomedical Engineering' role = 'Software Team' image = {Akira}/>
							 </div>
		 				</div>
		 				<div className = "row">
						 	<div className="col-4">
								<ProfileCardStudents name='David Du' degree = 'Mechanical and Biomedical Engineering' role = 'Testing Team' image = {David}/>
	 						</div>
	 						<div className="col-4">
							 	<ProfileCardStudents name='Sutapa Saha' degree = 'Advanced Science' role = 'Testing Team' image = {Sutapa}/>
	 						</div>
							<div className="col-4">
								<ProfileCardStudents name='Karan Singh' degree = 'Electrical Engineering' role = 'Testing Team' image = {Karan}/>
							</div>
		 
						</div>
						<div className = "row">
							<div className="col-4">
								
									<ProfileCardStudents name='Krishne Thayaparan' degree = 'Medicine' role = 'Testing Team' image = {Krishne}/>
							</div>

								<div className="col-4">
									<ProfileCardStudents name='Megan Wong' degree = 'Electrical Engineering' role = 'Testing Team' image = {Megan}/>
								</div>
								<div className="col-4">
									<ProfileCardStudents name='Alice Zhao' degree = 'Advanced Maths/Material Science'  role = 'Testing Team' image = {Alice}/>
								</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

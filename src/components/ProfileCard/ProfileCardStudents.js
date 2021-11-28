import React from 'react'
import './ProfileCardStudents.css'

export default function ProfileCardStudents(props) {
    return (
        <div className = "student-profiles ">
            <div className = "student-profile-image-head">   
                    <img className = "student-profile-image" src={props.image} alt=""/>
            </div>
            <div className = "student-profile-text">
                <h3 className = "student-profile-name">
                    {props.name}
                </h3>
                <p className= "student-profile-degree">
                    {props.degree}
                </p>
                <p className= "student-profile-role">
                    {props.role}
                </p>
            </div>
        </div>
    )
}

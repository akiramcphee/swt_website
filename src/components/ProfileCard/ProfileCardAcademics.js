import React from 'react'
import './ProfileCardAcademics.css'

export default function ProfileCardAcademics(props) {
    return (
        <div className = "academic-profiles ">
            <div className = "academic-profile-image-head">   
                    <img className = "academic-profile-image" src={props.image} alt=""/>
            </div>
            <div className = "academic-profile-text">
                <h3 className = "academic-profile-name">
                    {props.name}
                </h3>  
                <p className= "academic-profile-role">
                    {props.role}
                </p>
            </div>
        </div>
    )
}

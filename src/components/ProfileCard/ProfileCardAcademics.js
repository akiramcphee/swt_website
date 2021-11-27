import React from 'react'
import './ProfileCardAcademics.css'

export default function ProfileCardAcademics(props) {
    return (
        <div className = "profiles ">
            <div className = "profile-image-head">   
                    <img className = "profile-image" src={props.image} alt=""/>
            </div>
            <div className = "profile-text">
                <h3 className = "profile-name">
                    {props.name}
                </h3>
                <p className= "profile-role">
                    {props.role}
                </p>
            </div>
        </div>
    )
}

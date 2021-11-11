import React from 'react'
import './LogPost.css'

export default function LogPost(props) {
    let log = require('../../data.json');
    const photo = require(`../../images/${log['project-name'][props.project][props.week].image}`).default;
    return (
        <div>
            <div className = "background-border">
                <h3 className = "logPost_date">{log['project-name'][props.project][props.week].date}</h3>
                <p className = "logPost_description">{log['project-name'][props.project][props.week].overview}</p>
                <div className = "log-image">
                    <img className = "log-image-size" src={photo} alt="SWT"></img> 
                </div>
            </div>
        </div>
    )
}

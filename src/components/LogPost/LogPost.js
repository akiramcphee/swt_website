import React from 'react'
import './LogPost.css'



export default function LogPost(props) {
    let log = require('./LogPost.json');
    const photo = require(`../../images/${log[props.week].image}`).default;
    return (
        <div>
            <div className = "background-border">
                <h3 className = "logPost_date">{log[props.week].date}</h3>
                <p className = "logPost_description">{log[props.week].overview}</p>
                <div className = "log-image">
                    <img src={photo} alt="SWT"></img> 
                </div>
            </div>
        </div>
    )
}

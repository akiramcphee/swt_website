import React from 'react'
import './BigProjectCard.css'



export default function BigProjectCard(props) {
    let log = require('../../data.json');
    const photo = require(`../../images/${log['project-name'][props.projectName].background}`).default;
    return (
        <div>
            <div className = "big-project-border">
                <div className = "col-7">
                    <div className = "text-div">
                        <h3 className = "big-project-name">{log['project-name'][props.projectName]['full-name']}</h3>
                        <p className= "big-project-cards-brief-description">{log['project-name'][props.projectName]['theory']}</p>
                        <p className= "big-project-cards-brief-description">{log['project-name'][props.projectName]['fabrication']}</p>
                        {/* <Link className = "big-link-text" to={`/log/${props.projectName}`}>
                            Find out more
                        </Link> */}
                    </div>
                </div>
                <div className = "col-5">
                    <img className = "big-card-image" src={photo} alt="SWT"></img>        
                </div>
            </div>
        </div>
    )
}

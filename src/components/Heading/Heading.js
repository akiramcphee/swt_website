import React from 'react'
import './Heading.css'

export default function Heading(props) {
    return (
        <div class='box'>
            <div className='heading'>
                <h2>
                    {props.headtext}
                </h2>
            </div>
            
            <div className='headingText'>
                <p>
                    {props.text1}
                </p>
            </div>
        </div>
    )
}

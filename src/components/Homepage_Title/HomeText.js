import React from 'react';
import './HomeText.css';

export default function HomeText(props) {
    return (
        <div class='TitleBox'>
            <div className = "unsw_subtitle">
                <h4>
                    {props.subt}
                </h4>
            </div>
            <div className = "homeText_swt">
                <h1>
                    {props.titl}
                </h1>
            </div>
        </div>
    )
}

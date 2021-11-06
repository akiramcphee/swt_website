import React from 'react'
import Button from '../components/Button/Button';
import Navbar from '../components/Navbar'
import './Home.css'

export default function Home() {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Button></Button>
            </div>
            <div class = "test">
                {/* <h1> Home Page Test</h1> */}
            </div>
        </div>
    )
}

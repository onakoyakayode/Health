import React from 'react';
import './Welcome.css'
import buttonIcon from "../../icons/arrow-btn.svg"
import { Link } from 'react-router-dom'


export default function Welcome() {
    return (
        <div className='welcome-page'>
            <h1 className='welcome-title'>Welcome to <span>Ile-Iwosan</span></h1>
            <Link to='/signpage'><img src={buttonIcon} className="button-icon" alt="button-icon" /></Link>
        </div>
    )
}
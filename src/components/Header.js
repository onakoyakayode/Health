import React from 'react'
import patient from "../images/patient.png"
import buttonIcon from "../icons/arrow-btn.svg"

export default function Header({open}) {
    return (
        <header className='header'>
            <div className='header-top'>
                <div className='header-image'>
                    <img src={patient} className='header-img' alt='header'/>
                </div>
            </div>
            <h1 className='header-title'>Book your <span>Hospital's</span> Appointment</h1>
            <p className='header-description'>One place to get the fastest and stress free Doctor's appointment</p>
            <img src={buttonIcon} onClick={() => open(true)} className="button-icon" alt="button-icon" />
        </header>
    )
}
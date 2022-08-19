import React from "react";
import "./SignPage.css";
import Arrow from "../../icons/arrow-left.svg"
import { Link } from "react-router-dom"



export default function SignPage() {
    return (
        <div className="sign-page">
            <Link to='/'><img src={Arrow}  className="arrow-icon" alt="arrow" /></Link>
            <div className="sign-page-content">
                <h1>Ile-Iwosan</h1>
                <p>Get your hospital appointment done from your comfort zone done in 30 minutes</p>
                <div className="sign-button">
                    <Link className="sign-btn" to='/signin'><button type="button" className="sign-in">Sign in</button></Link>
                    <Link className="sign-btn" to='/signup'><button type="button" className="sign-up">Sign up</button></Link>
                </div>
            </div>
        </div>
    )
}
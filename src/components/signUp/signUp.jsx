import React from 'react'
import "./signUp.css"
import { Link } from "react-router-dom"


export default function signUp(props) {
    return (
        <div className="sign-up">
            <Link to='/signpage'><img src={props.arrow} className="arrow-icon" alt="arrow"/></Link>
            <h1 className="sign-in-title">Create Account</h1>
            <div className="sign-up-content">
                <form className="form-horizontal">
                    <div className="form-input">
                        <input type="text" className="form-name" placeholder="Name" name="sign-up-name" />
                        <input type="email" className="form-email" placeholder="Email" name="sign-up-email"/>
                        <input type="password" className="form-password" placeholder="Password" name="sign-up-password"/>
                    </div>
                    {/* <Link to='/login' className="forgot-password">Forgot-password</Link> */}
                    <div className="sign-up-button">
                        <button type="submit" className="sign-in-up-btn">Sign in</button>
                        <p className="sign-up-text">or</p>
                        <Link  to='/signin'><button type="button" className="sign-in-in-btn" >Sign up</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
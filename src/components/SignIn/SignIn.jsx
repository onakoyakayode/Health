import React from "react";
import "./SignIn.css"
import { Link } from "react-router-dom"

export default function SignIn(props) {
    return (
        <div className="sign-in">
            <Link to='/signpage'><img src={props.arrow} className="arrow-icon" alt="arrow"/></Link>
            <h1 className="sign-in-title">Welcome Back</h1>
            <div className="sign-in-content">
                <form className="form-horizontal">
                    <div className="form-input">
                        <input type="email" className="form-email" placeholder="Email" name="sign-in-email"/>
                        <input type="password" className="form-password" placeholder="Password" name="sign-in-password"/>
                    </div>
                    <Link to='/login' className="forgot-password">Forgot-password</Link>
                    <div className="sign-in-button">
                        <button type="submit" className="sign-in-btn">Sign in</button>
                        <p className="sign-in-text">or</p>
                        <Link  to='/signup'><button type="button" className="sign-up-btn" >Sign up</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
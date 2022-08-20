import React, { useState } from "react";
import "./SignIn.css"
import { Link, useNavigate } from "react-router-dom"

export default function SignIn(props) {

    const navigate = useNavigate();

    const [signInData, setSignInData] = useState({
        signInEmail: "",
        signInPassword: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setSignInData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signInData)
        navigate('/bookApp')
    }


    return (
        <div className="sign-in">
            <Link to='/signpage'><img src={props.arrow} className="arrow-icon" alt="arrow"/></Link>
            <h1 className="sign-in-title">Welcome Back</h1>
            <div className="sign-in-content">
                <form onSubmit={handleSubmit} className="form-horizontal">
                    <div className="form-input">
                        <input onChange={handleChange} value={signInData.signInEmail} type="email" className="form-email" placeholder="Email" name="signInEmail"/>
                        <input onChange={handleChange} value={signInData.signInPassword} type="password" className="form-password" placeholder="Password" name="signInPassword"/>
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
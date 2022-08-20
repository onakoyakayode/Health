import React from 'react'
import "./signUp.css"
import { Link } from "react-router-dom"


export default function SignUp(props) {

    const [signUpData, setSignUpData] = React.useState({
        fullName: "",
        Email: "",
        Password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setSignUpData(prevSignUpData =>{
            return {
                ...prevSignUpData,
                [name] : value
            }
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signUpData)
    }



    return (
        <div className="sign-up">
            <Link to='/signpage'><img src={props.arrow} className="arrow-icon" alt="arrow"/></Link>
            <h1 className="sign-in-title">Create <span>Account</span></h1>
            <div className="sign-up-content">
                <form onSubmit={handleSubmit} className="form-horizontal">
                    <div className="form-input">
                        <input onChange={handleChange} value={signUpData.fullName} type="text" className="form-name" placeholder="Name" name="fullName" />
                        <input onChange={handleChange} value={signUpData.Email} type="email" className="form-email" placeholder="Email" name="Email"/>
                        <input onChange={handleChange} value={signUpData.Password} type="password" className="form-password" placeholder="Password" name="Password"/>
                    </div>
                    {/* <Link to='/login' className="forgot-password">Forgot-password</Link> */}
                    <div className="sign-up-button">
                        <button type="submit" className="sign-in-up-btn">Sign up</button>
                        <p className="sign-up-text">or</p>
                        <Link  to='/signin'><button type="button" className="sign-in-in-btn" >Log in</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
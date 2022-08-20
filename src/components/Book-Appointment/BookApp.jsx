import React from "react";
import "./BookApp.css"
import Details from "../patientDetails/patientDetails"
import { Link } from "react-router-dom"



export default function BookApp(props) {

    console.log(Details.users[0].name)
    return (
        <div className="book-app">
            <div className="book-app-name">
                <Link to='/signin'><img src={props.arrow} className="arrow-icon" alt="arrow"/></Link>
                <h4 className="book-app-title">Welcome: {Details.users[0].name}</h4>
            </div>
            <div className="book-app-description">
                <h1>Find your <span>Preferred Hospital</span></h1>
            </div>
           <div className="book-app-form">
            <form className='main-form-actions'>
                    <div className='main-form-hospitals'>
                        <label htmlFor='hospital'>Hospitals Near Me:</label>
                        <select name='hospital' id='hospital' className='hospitals'>
                            <option value='' defaultValue="Select Hospital">Select Hospital</option >
                            <option value='formData.agege general hospital'>Agege General Hospital</option>
                            <option value='formData.ajeromi general hospital'>Ajeromi General Hospital</option>
                            <option value='formData.alimosho general hospital'>Alimosho General Hospital</option> 
                            <option value='formData.Badagry general hospital'>Badagry General Hospital</option>
                            <option value='formData.epe general hospital'>Epe General hospital</option>
                            <option value='formData.gbagada general hospital'>Gbagada General Hospital</option>
                            <option value='formData.ifako general hospital'>Ifako/Ijaye General Hospital</option >
                            <option value='formData.ikeja general hospital'>Iikeja General Hospital</option >
                            <option value='formData.ikorodu general hospital'>Ikorodu General Hospital</option>
                            <option value='formData.isolo general hospital'>Isolo General Hospital</option>
                            <option value='formData.lagos state general hospital'>Lagos State General Hospital, Mushin</option> 
                            <option value='formData.lagos odan general hospital'>Lagos Island General Hospital, Odan</option > 
                            <option value='formData.lagos island maternity hospital'>Lagos Island Maternity Hospital</option >
                            <option value='formData.lekki general hospital'>Ibeju/Lekki General Hospital</option >
                            <option value='formData.military hospital'>Military Hospital - Lagos</option >
                            <option value='formData.national orthopaedic hospital'>National Orthopaedic Hospital Igbobi Lagos</option > 
                            <option value='formData.randle general Hospital'>Randle General Hospital, Surulere</option >
                            <option value='formData.somolu general hospital'>Somolu General Hospital</option > 
                        </select>
                    </div>
                    <div className="main-form-service">
                        <label htmlFor='service'>Required Service</label>
                        <select id='service' name='service' className='service' >
                            <option value='' defaultValue="Select Service">Select Service</option >
                            <option value='formData.general outpatient'>General outpatient</option > 
                            <option value='formData.Inpatient treatment facility'>Inpatient Treatment Facility</option >
                            <option value='formData.General Medicine'>General Medicine</option >
                            <option value='formData.Surgery'>Surgery</option > 
                            <option value='formData.Opthalmology'>Opthalmology</option >
                            <option value='formData.orthopaedic'>Orthopaedics</option>
                            <option value='formData.physiotherapy'>Physiotherapy</option >
                            <option value='formData.Maternity'>Maternity</option >
                            <option value='formData.Obstetrics'>Obstetrics & Gynaecology</option > 
                            <option value='formData.paediatrics'>Paediatrics</option >
                            <option value='formData.Emergency service'>Emergency Service</option > 
                            <option value='formData.Nursing care'>Nursing Care</option > 
                            <option value='formData.Pharmacy'>Pharmacy</option > 
                            <option value='formData.Pathology'>Pathology</option >
                            <option value='formData.blood bank'>Blood Bank</option > 
                            <option value='formData.Radiology'>Radiology</option > 
                            <option value='formData.Chest Clinic'>Chest Clinic</option> 
                            <option value='formData.Dental Care'>Dental Care</option> 
                            <option value='formData.Physical Medicine'>Physical Medicine</option >
                            <option value='formData.Medical Rehabilitation'>Medical Rehabilitation Centre</option> 
                        </select>
                    </div>
                    <div className="main-form-delivery">
                        <label htmlFor="delivery">Booking Type:</label>
                        <div className='main-form-delivery-type'>
                            <div className="normal-booking bookings">
                                <input type="radio" name="delivery"  value="option2" className='normal-booking' id="normal-booking"/>
                                <label className="booking" htmlFor="delivery">Normal Booking</label>
                            </div>
                            <div className="emergency-booking bookings">
                                <input type="radio" name="delivery"  value="option1" className='emergency-booking' id="emergency-booking"/>
                                <label className="booking" htmlFor="delivery">Emergency Booking</label>
                            </div>
                        </div>
                        <div className="main-form-date">
                            <label htmlFor="delivery-date">Select Appointment Date:</label>
                            <input type="date" name="delivery-date" id="delivery-date" defaultValue="04/26/2015"/>
                        </div>
                        <div className="main-form-time">
                            <label htmlFor="appt">Choose a time for your appointment:</label>
                            <input type="time" name="appt" id="appt" defaultValue="09:00"/>
                        </div>
                    </div>
                    <button  className='form-submit-button'>Submit</button>
                </form>
           </div>
        </div>
    )
}
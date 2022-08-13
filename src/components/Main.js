import React from 'react';
import toggleButton from '../icons/justify-left.svg'
import personImage from '../icons/person-fill.svg'


export default function Main({handleChange, handleSubmit}) {
    return (
        <main className="main-container">
            <div className='main-top'>
                <img src={toggleButton} className='main-toggle' alt='toggle' />
                <img src={personImage} className='person-image' alt='person' />
            </div>
            <div className='main-search'>
                <h3 className='main-search-heading'>Find your <span>Nearest Hospital</span></h3>
            </div>
            <form className='main-form-actions'>
                <div className='main-form-hospitals'>
                    <label htmlFor='hospital'>Hospitals Near Me:</label>
                    <select name='hospital' id='hospital' className='hospitals' value={handleChange} onChange={() => handleChange}>
                        <option value='' disabled selected hidden>Select Hospital</option > 
                        <option value=''></option >
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
                    <select id='service' name='service' className='service' value={handleChange} onChange={() => handleChange}>
                        <option value='' disabled hidden selected>Select Service</option >
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
                    <h3 className="main-form-booking">Booking Type:</h3>
                    <div className='main-form-delivery-type'>
                        <div className="normal-booking bookings">
                            <input type="radio" name="delivery" checked={handleChange} value="option2" className='normal-booking' id="normal-booking"/>
                            <label htmlFor="delivery">Normal Booking</label>
                        </div>
                        <div className="emergency-booking bookings">
                            <input type="radio" name="delivery"  value="option1" className='emergency-booking' id="emergency-booking"/>
                            <label htmlFor="delivery">Emergency Booking</label>
                        </div>
                    </div>
                    <div className="main-form-date">
                        <label htmlFor="delivery-date">Select Appointment Date:</label>
                        <input type="date" name="delivery-date" id="delivery-date" value="07/08/2022" min="(2022-08-19)"/>
                    </div>
                    <div className="main-form-time">
                        <label htmlFor="appt">Choose a time for your appointment:</label>
                        <input type="time" name="appt" id="appt" value="09:00"  min="08:00" max="17:00"/>
                    </div>
                </div>
                <button onSubmit={handleSubmit} className='form-submit-button'>Submit</button>
            </form>
        </main>
    )
}
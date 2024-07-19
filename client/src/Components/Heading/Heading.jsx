
import React from 'react'
import './Heading.css'

import AppForm from '../Appointment/appForm'
const textStyle = {
  color: '#ce4141',
}
const Heading = () => {
  return (
    <div className="heading-container">
      <div className="heading-text">
        <h1>
          Leading <strong style={textStyle}> HealthCare</strong> Excellence in
          <br /> Morigaon
        </h1>
      </div>
      <div className="form-container">
        <AppForm />
      </div>
    </div>
  )
}


export default Heading

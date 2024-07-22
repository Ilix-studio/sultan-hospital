import React from 'react'
import './Health-services.css'

const Box1 = () => {
  const departments = [
    '24/7 EMERGENCY MEDICAL SURVICE',
    'AFFORDABLE TREATMENT AND TEST',
    'SPECIAL OFFER ON FULL BODY CHECKUP',
    'QUALITY PROFESSIONAL HIGHER ONLY',
    'QUALIFIED EXPERTS IN THERIR FIELD',
  ]

  return (
    <div className="container1">
      <div className="title-row1">
        <h1 className="title1">WHY SULTAN HOSPITAL ?</h1>
      </div>
      {departments.map((department, index) => (
        <div className="department-row1" key={index}>
          <div className="department-background1"></div>
          <div className="department-name1">{department}</div>
        </div>
      ))}
    </div>
  )
}

export default Box1

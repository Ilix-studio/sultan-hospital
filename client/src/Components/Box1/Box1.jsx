import React from 'react'
import './Box1.css'

const Box1 = () => {
  const features = [
    '24/7 EMERGENCY MEDICAL SERVICE',
    'AFFORDABLE TREATMENT AND TEST',
    'SPECIAL OFFER ON FULL BODY CHECKUP',
    'QUALITY PROFESSIONAL HIGHER ONLY',
    'QUALIFIED EXPERTS IN THERIR FIELD',
  ]

  return (
    <>
      <div className="main">
        <div className="container-bg"></div>
        <div className="container1">
          <div className="title-row1">
            <h1 className="title1">WHY SULTAN HOSPITAL ?</h1>
          </div>
          {features.map((feature, index) => (
            <>
              <div className="feature-row1" key={index}>
                <div className="feature-name1">{feature}</div>
                <div className="feature-background1"></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Box1

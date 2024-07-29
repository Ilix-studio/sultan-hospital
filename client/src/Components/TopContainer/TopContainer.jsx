import React from 'react'
import './TopContainer.css'

function Box() {
  return (
    <>
      <div className="parent">
          <div className="child child-1">
            <p> Videos</p>
            
          </div>
          <div className="child child-2">
          <b class="ambulance-service">
          <p >24/7 Ambulance <br/> Service</p>
          <p>+91-8822686715 <br/> +91-9435201000</p>
          </b>
          </div>
          <div className="child child-3">
            <p >80+ <br/> Hospital Beds</p>
            <p >700+ <br/> Free Treatments</p>
            <p >50000+ <br/> Happy Patients</p>
          </div>
          <div className="child child-4">
            <p>Top Facilites</p>
            <div className='inner-child'>
              <b  inner-child-1>ICU</b>
              <b  inner-child-2>NICU</b>
              <b  inner-child-3>OT</b>
              <b  inner-child-4>OPD/IPD</b>
            </div>
          </div>
      </div>
    </>
  )
}

export default Box

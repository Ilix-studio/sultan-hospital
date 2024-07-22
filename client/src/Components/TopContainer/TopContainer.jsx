import React from 'react'
import './Bottom-container.css'

function Box() {
  return (
    <>
      <div className="grand_parent">
        <div className="parents">
          <div className="child">Box1</div>
          <div className="child">Box2</div>
          <div className="child">Box3</div>
          <div className="child">Box4</div>
        </div>
      </div>
    </>
  )
}

export default Box

import React from 'react'
import './Cardsstyle.css'

function Cards() {
  return (
    <>
      <div class="formInput">
        <form action="">
        <h1>MAKE AN APPOINTMENT</h1>
        <div>
        <label htmlFor=""></label>
        <input type="text" placeholder='Your Full Name' />
        </div>
        <div>
        <label htmlFor=""></label>
        <input type="text" placeholder='Your Guardian Name' />
        </div>
        <div>
        <label htmlFor=""></label>
        <input type="text" placeholder='Your Phone Number' />
        </div>
        <div>
        <label htmlFor=""></label>
        <input type="text" placeholder='Select Date' />
        </div>
        <div>
        <label htmlFor=""></label>
        <input type="text" placeholder='Select Flexible Hour' />
        </div>
        <button>SUBMIT</button>
        </form>
       
      </div>
    </>
  );
}

export default Cards
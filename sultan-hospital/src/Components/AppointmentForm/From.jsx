import React, { useState } from 'react'
import './App.css'

function App() {
  const[formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });
  const handleSubmit =() =>{};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
        <label>First Name:</label>
        <input 
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="Enter Your First Name"
        />
        </div>
        <div>
      <label>Last Name:</label>
        <input 
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="Enter Your Last Name"
        />
      </div>
      <div>
      <label>Email:</label>
        <input 
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter Your Email"
        />
      </div>
      <div>
      <label>Phone Number:</label>
        <input 
        type="text"
        name="phone"
        value={formData.phone}
        placeholder="Enter Your Phone Number"
        />
      </div>
      <div>
      <label>Age:</label>
        <input 
        type="number"
        name="age"
        value={formData.age}
        placeholder="Enter Your Age"
        />
      </div>
      <div>
      <label>Gender:</label>
        <select name="gender" value={formData.gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        </select>
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
      </form>
    </>
  )
}

export default App


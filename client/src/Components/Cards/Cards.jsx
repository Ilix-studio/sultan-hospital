import React, { useState } from 'react';
import './Cardsstyle.css'; // Import your CSS file

const InputContainer = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
    <div className="main-container">
    <div className='practice'>
    <div className="input-container">
      <input 
        type="text" 
        id="input" 
        required 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Patient Name</label>
      <div className="underline"></div>
    </div>
    <div className="input-container">
      <input 
        type="text" 
        id="input" 
        required 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Your Phone Number</label>
      <div className="underline"></div>
    </div>
    <div className="input-container">
      <input 
        type="text" 
        id="input" 
        required 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Select Your Flexible Hour</label>
      <div className="underline"></div>
    </div>
    <div className="input-container">
      <input 
        type="text" 
        id="input" 
        required 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Select Date</label>
      <div className="underline"></div>
    </div>
    <div className="input-container">
      <input 
        type="text" 
        id="input" 
        required 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Select Doctor</label>
      <div className="underline"></div>
    </div>
    
    <button class="rectangle-div"><span class="make-an-appointment">MAKE AN APPOINTMENT</span></button>
    </div>
    </div>
    </>
  );
};

export default InputContainer ;

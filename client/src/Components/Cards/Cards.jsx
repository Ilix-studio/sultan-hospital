import React, { useState } from 'react';
import './Cardsstyle.css'; // Import your CSS file

const InputContainer = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
    <div className="input-container">
      <input 
        type="text" 
        id="input" 
        required 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Enter Text</label>
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
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Enter Text</label>
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
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Enter Text</label>
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
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Enter Text</label>
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
      <label htmlFor="input" className={`label ${inputValue && 'filled'}`}>Enter Text</label>
      <div className="underline"></div>
    </div>
    </>
  );
};

export default InputContainer ;
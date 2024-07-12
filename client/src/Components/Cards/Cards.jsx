import React, { useState } from "react";
import "./Cardsstyle.css"; // Import your CSS file

const InputContainer = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="main-container mt-0 mb-10 pt-5 border border-sultanred rounded-3xl">
        <div className="sub-heading">
          {/* <h1 className="text-white font-semibold text-lg">
            Make An Appointment
          </h1> */}
        </div>
        <div className="input-container">
          <input
            type="text"
            id="input"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <label htmlFor="input" className={`label ${inputValue && "filled"}`}>
            Patient Name
          </label>
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
          <label htmlFor="input" className={`label ${inputValue && "filled"}`}>
            Your Phone Number
          </label>
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
          <label htmlFor="input" className={`label ${inputValue && "filled"}`}>
            Select Your Flexible Hour
          </label>
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
          <label htmlFor="input" className={`label ${inputValue && "filled"}`}>
            Select Date
          </label>
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
          <label htmlFor="input" className={`label ${inputValue && "filled"}`}>
            Select Doctor
          </label>
          <div className="underline"></div>
        </div>
        <div className="flex justify-center">
          <button class="bg-sultanred px-10 text-white font-semibold py-2 rounded-lg border border-white justify-center">
            Make an appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default InputContainer;

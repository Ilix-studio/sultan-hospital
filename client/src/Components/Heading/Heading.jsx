import React from "react";
import "./Heading.css";

import AppForm from "../Appointment/appForm";
const textStyle = {
  color: "#0d567e",
};
const Heading = () => {
  return (
    <>
      <div className="heading-container">
        <div className="heading-text">
          <h1 className="leading-healthcare">
            <strong style={textStyle}> Leading </strong> HealthCare
          </h1>
          <h1 className="excellence-in">
            Excellence in <br /> Morigaon
          </h1>
        </div>
        <div className="form-container">
          <AppForm />
        </div>
      </div>
    </>
  );
};

export default Heading;

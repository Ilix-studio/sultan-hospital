import React from "react";
import "./Heading.css";
import AppForm from "../AppointmentForm/AppForm";

const textStyle = {
  color: "#ce4141",
};
const Heading = () => {
  return (
    <>
      <section className="heading-container">
        <main className="heading-text">
          <div className="heading-content">
            <p>
              Welcome to Sultan Multi-Speciality Hospital and Research Center.{" "}
            </p>
            <h1>
              Leading <span style={textStyle}> HealthCare</span> Excellence in
              <br /> Morigaon
            </h1>
          </div>
          <div className="form-container">
            <AppForm />
          </div>
        </main>
      </section>
    </>
  );
};

export default Heading;

import React from "react";
import "./Heading.css";
import AppForm from "../AppointmentForm/AppForm";
import { Link } from "react-router-dom";

const textStyle = {
  color: "#ce4141",
};
const Heading = () => {
  const handleClick = () => {
    window.location.href =
      "https://www.facebook.com/SHRC2020/videos/664537052561647/?mibextid=rS40aB7S9Ucbxw6v";
  };
  return (
    <>
      <section className="heading-container">
        <main className="heading-text">
          <div className="heading-content">
            <p>
              Welcome to Sultan Multi-Speciality Hospital and Research Center.{" "}
            </p>
            <h2>
              Leading <span style={textStyle}> HealthCare</span> Excellence in
              <br /> Morigaon
            </h2>
            <button className="heading-button">
              {" "}
              <a href="tel:+91-8822686715">Click to call us</a>
            </button>
          </div>
          <div className="form-container">
            <AppForm />
          </div>
        </main>
      </section>
      <section className="main-about">
        <div className="about-heading">About Us</div>
        <div className="inner-main-about">
          <div className="about-inner-content-left">
            <div className="button" onClick={handleClick}>
              <svg
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="26px"
              >
                <path
                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          <div className="about-right-content">
            <h2>
              We're setting Standards in Research what's more, Clinical Care.
            </h2>
            <p>
              We provide the most full medical services, so every person could
              have the pportunity o receive qualitative medical help.
            </p>
            <Link to="/about" className="aboutbtn">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Heading;

import React from "react";
import "./TopContainer.css";

const VideoSection = () => (
  <video className="child child-1" width="320" height="240" controls>
    <p>Videos</p>
  </video>
);

const AmbulanceService = () => (
  <div className="child child-2">
    <b className="ambulance-service">
      <p>
        24/7 Ambulance <br /> Service
      </p>
      <p>
        +91-8822686715 <br /> +91-9435201000
      </p>
    </b>
  </div>
);

const HospitalStats = () => (
  <div className="child child-3">
    <p>
      80+ <br /> Hospital Beds
    </p>
    <p>
      700+ <br /> Free Treatments
    </p>
    <p>
      50000+ <br /> Happy Patients
    </p>
  </div>
);

const Facilities = () => (
  <div className="child child-4">
    <p style={{ fontWeight: "bold", color: "white" }}>Top Facilities</p>
    <div className="inner-child">
      <b className="inner-child-1">ICU</b>
      <b className="inner-child-2">NICU</b>
      <b className="inner-child-3">OT</b>
      <b className="inner-child-4">OPD/IPD</b>
    </div>
  </div>
);

const Box = () => {
  return (
    <div className="parent">
      <VideoSection />
      <AmbulanceService />
      <HospitalStats />
      <Facilities />
    </div>
  );
};

export default Box;

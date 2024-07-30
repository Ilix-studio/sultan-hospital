import React from "react";
import { useNavigate } from "react-router-dom";

const Box1 = () => {
  const navigate = useNavigate();
  const healthServices = [
    "24/7 EMERGENCY MEDICAL SURVICE",
    "AFFORDABLE TREATMENT AND TEST",
    "SPECIAL OFFER ON FULL BODY CHECKUP",
    "QUALITY PROFESSIONAL HIGHER ONLY",
    "QUALIFIED EXPERTS IN THERIR FIELD",
  ];
  const handleDepartmentClick = (department) => {
    navigate(`/doctors/${department}`);
  };
  return (
    <div className="why-choose-us">
      <div className="why-choose-us-left">
        <h3>Why Sultan Hospital </h3>

        <div className="why-choose-box-container">
          {healthServices.map((department, index) => (
            <div
              className="why-choose-box"
              key={index}
              onClick={() => handleDepartmentClick(department)}
            >
              <div className="why-choose-box-text">
                <strong>{department}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Box1;

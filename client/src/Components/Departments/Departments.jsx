import { useNavigate } from "react-router-dom";
import "./Departments.css";

const Departments = () => {
  const navigate = useNavigate();

  const departments = [
    "NEUROLOGY",
    "CARDIOLOGY",
    "UROLOGY",
    "ORTHOPEDICS",
    "GYNECOLOGY",
    "MEDICINE",
    "PATHOLOGY",
    "PEDIATRICS",
    "ENDOCRINOLOGY",
    "ANESTHESIOLOGY",
    "SURGERY",
    "PHYSIOTHERAPY",
  ];

  const handleDepartmentClick = (department) => {
    navigate(`/doctors/${department}`);
  };
  return (
    <>
      <div className="why-choose-us">
        <div className="why-choose-us-left">
          <h3>Departments</h3>

          <div className="why-choose-box-container">
            {departments.map((department, index) => (
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
    </>
  );
};

export default Departments;

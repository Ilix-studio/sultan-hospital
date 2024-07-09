import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Box2.css';

const Box2 = () => {
  const navigate = useNavigate();

  const departments = [
        'NEUROLOGY',
        'CARDIOLOGY',
        'UROLOGY',
        'ORTHOPEDICS',
        'GYNECOLOGY',
        'MEDICINE',
        'PATHOLOGY',
        'PEDIATRICS',
        'ENDOCRINOLOGY',
        'ANESTHESIOLOGY',
        'SURGERY',
        'PHYSIOTHERAPY',
      ];

  const handleDepartmentClick = (department) => {
    navigate(`/doctors/${department}`);
  };

  return (
    <div className="container">
       <div className="title-row">
        <h1 className="title">DEPARTMENTS</h1>
      </div>
     {departments.map((department, index) => (
        <div 
          className="department-row" 
           key={index} 
           onClick={() => handleDepartmentClick(department)}
        >
         <div className="department-background"/>
          <div className="department-name">{department}</div>
         </div>
     ))}
   </div>
  );
};

export default Box2;




import "./TopContainer.css";

const AmbulanceService = () => (
  <div className="child child-2">
    <b className="ambulance-service">
      <p>24/7 Ambulance Service</p>
      <p>+91-8822686715</p>
      <p> +91-9435201000</p>
    </b>
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

const TopContainer = () => {
  return (
    <div className="parent">
      <AmbulanceService />
      <Facilities />
    </div>
  );
};

export default TopContainer;

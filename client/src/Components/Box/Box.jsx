import React from "react";
import "./Box.css";

function Box() {
  return (
    <>
      <div className="facilities  h-96 flex justify-around py-10">
        <div className="ambulance bg-cardbgpink w-1/4 rounded-2xl flex flex-col items-center justify-center">
          <h2 className="text-lg">24/7 Ambulance Service</h2>
          <h4 className="text-lg">+91-8822686715</h4>
          <h4 className="text-lg">+91-9435201000</h4>
        </div>
        <div className="topfacilities bg-sultanred w-1/6 rounded-xl flex flex-col items-center justify-center gap-4">
          <h2 className="text-white  text-lg ">Top Facilities</h2>
          <div className="facilities bg-cardbgpink w-4/5 rounded-md text-center font-semibold">
            ICU
          </div>
          <div className="facilities bg-cardbgpink w-4/5 rounded-md text-center font-semibold">
            NICU
          </div>
          <div className="facilities bg-cardbgpink w-4/5 rounded-md text-center font-semibold">
            OT
          </div>
          <div className="facilities bg-cardbgpink w-4/5 rounded-md text-center font-semibold">
            OPD/IPD
          </div>
        </div>
        <div className="features bg-cardbgblue w-1/4 rounded-xl flex flex-col items-center justify-center">
          <h2 className="text-lg">80+ Hospital Beds</h2>
          <h2 className="text-lg">700+ Free Treatments</h2>
          <h2 className="text-lg">5000+ Happy Customers</h2>
        </div>
      </div>
      {/* <div className="container-1">
        <div className="item1"></div>
        <div className="item2"></div>
        <div className="item3"></div>
        <div className="item4"></div>
      </div> */}
    </>
  );
}

export default Box;

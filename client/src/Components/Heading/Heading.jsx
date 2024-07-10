import React from "react";
import "./Heading.css";
const Heading = () => {
  return (
    <>
      <div className="container1 bg-white flex justify-start mt-10 ">
        <div className="heading-left flex flex-col items-start ">
          <h1 className="text-6xl text-sultanblue font-bold w-7/8">
            Leading
            <span className="text-sultanred"> Healthcare</span>
          </h1>
          <h1 className="text-4xl text-sultanblue font-bold w-7/8">
            Excellence in Morigaon.{" "}
          </h1>
        </div>
        {/* <div className="heading-right"></div>
        <div className="appointment"></div> */}
        <p className="mt-20 text-xl  pr-6">
          Sultan Multispeciality Hospital & Research Centre, is a leading
          private hospital in Morigaon. Serving both local residents and
          patients from other areas, it has been a trusted healthcare provider
          since 2017.
        </p>
      </div>
    </>
  );
};

export default Heading;

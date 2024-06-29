import React from "react";
import Navbar from "../Navbar/Navbar";

const WithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default WithNavbar;

// Navbar.js
import React, { useState } from "react";
import {
  Header,
  Nav,
  NavData,
  NavItem,
  NavLogo,
  NavMenu,
  NavToggle,
} from "./Navbar-Style.js";
import { useNavigate } from "react-router-dom";

import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <Header>
      <Nav>
        <NavData>
          <NavLogo to="/">Sultan Hospital</NavLogo>
          <MdOutlineHealthAndSafety size={24} />
        </NavData>
        <NavToggle onClick={toggleMenu}>
          {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </NavToggle>
        <NavMenu isOpen={isOpen}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          {isAuthenticated ? (
            <NavItem onClick={handleLogout}>Logout</NavItem>
          ) : (
            <NavItem to="/login">Login</NavItem>
          )}
        </NavMenu>
      </Nav>
    </Header>
  );
};

export default Navbar;

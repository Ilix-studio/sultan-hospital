import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const NavData = styled.div`
  display: flex;
  align-items: center;
`;

const NavLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
  font-family: "Inknut Antiqua", serif;
  font-weight: 600;
  color: #ce4141;
  i {
    margin-right: 0.5rem;
  }
`;

const NavToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    float: right;
  }
`;

const NavMenu = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled(NavLink)`
  margin-left: 2rem;
  text-decoration: none;
  color: #000;
  font-family: "Inknut Antiqua", serif;
  font-weight: 500;

  &.active {
    font-weight: bold;
    color: #007bff;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 1rem 0;
    text-align: center;
    margin-left: 0;
  }
`;

export { Header, Nav, NavData, NavLogo, NavToggle, NavMenu, NavItem };

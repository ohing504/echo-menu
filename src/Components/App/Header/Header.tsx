import * as React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import logo from "./logo.svg";

const Header = () => (
  <Navbar>
    <Nav>
      <NavItem>
        <img src={logo} className="App-logo" alt="logo" />
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;

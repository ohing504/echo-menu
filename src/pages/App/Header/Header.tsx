import * as React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import logo from "../../../logo.svg";

const styles = {
  logo: { height: "30px" }
};

const Header = () => (
  <Navbar>
    <Nav>
      <NavItem>
        <img src={logo} style={styles.logo} alt="logo" />
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;

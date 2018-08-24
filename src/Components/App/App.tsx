import * as React from "react";

import { Nav, Navbar, NavItem } from "reactstrap";
import "./App.css";

import Landing from "../Landing/Landing";
import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar className="App-Navbar">
          <Nav>
            <NavItem>
              <img src={logo} className="App-logo" alt="logo" />
            </NavItem>
          </Nav>
        </Navbar>

        <div>
          <Landing />
        </div>
      </div>
    );
  }
}

export default App;

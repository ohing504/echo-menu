import * as React from "react";
import "./App.css";

import UploadFile from "../UploadFile/UploadFile";
import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <UploadFile />
        </div>
      </div>
    );
  }
}

export default App;

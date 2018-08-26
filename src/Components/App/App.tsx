import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import * as routes from "../../constants/routes";
import Landing from "../Landing/Landing";
import Header from "./Header/Header";

const App = () => (
  <Router>
    <div className="App">
      <div className="App-header">
        <Header />
      </div>

      <main>
        <Switch>
          <Route exact={true} path={routes.LANDING} component={Landing} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;

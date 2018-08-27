import * as React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as routes from "../../constants/routes";
import Landing from "../Landing/Landing";
import UploadImage from "../UploadImage/UploadImage";
import Header from "./Header/Header";

const styles = {
  app: {},
  header: {
    backgroundColor: "#ff9800",
    display: "flex",
    height: "56px",
    justifyContent: "center"
  },
  main: { display: "flex", justifyContent: "center", margin: "10px" }
};

const App = () => (
  <Router>
    <div style={styles.app}>
      <Helmet>
        <title>Echo Menu</title>
      </Helmet>

      <div style={styles.header}>
        <Header />
      </div>

      <main style={styles.main}>
        <Switch>
          <Route exact={true} path={routes.LANDING} component={Landing} />
          <Route exact={true} path={routes.UPLOAD} component={UploadImage} />
          <Route component={Landing} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;

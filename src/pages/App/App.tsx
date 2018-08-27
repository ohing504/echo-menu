import * as React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as routes from "../../constants/routes";
import Landing from "../Landing/Landing";
import UploadImage from "../UploadImage/UploadImage";
import Header from "./Header/Header";

import logo from "../../logo.jpg";

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
        <meta property="og:title" content="Echo Menu" />
        <meta property="og:description" content="주간 메뉴표 보기" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <meta
          property="og:image:secure_url"
          content={"https://echo-menu.firebaseapp.com" + logo}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="532px" />
        <meta property="og:image:height" content="305px" />
        <meta property="og:url" content="https://echo-menu.firebaseapp.com/" />
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

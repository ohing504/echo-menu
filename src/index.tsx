import * as dotenv from "dotenv";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactGA from "react-ga";
import App from "./pages/App/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./stores";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

dotenv.config();

ReactGA.initialize("UA-124822841-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

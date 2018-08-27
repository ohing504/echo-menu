import * as dotenv from "dotenv";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./pages/App/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./stores";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

dotenv.config();

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

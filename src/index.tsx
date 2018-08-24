import * as dotenv from "dotenv";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./Components/App/App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

dotenv.config();

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();

import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "../../stores";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider {...store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

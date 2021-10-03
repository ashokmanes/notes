import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./App";
import store from "./ducks/store";
import { ErrorBoundary } from "./Util/HandleError";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

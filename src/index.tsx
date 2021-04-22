import React from "react";
import ReactDOM from "react-dom";
import "./styles/_index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

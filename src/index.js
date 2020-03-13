import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
    <Route exact path="/">
      Home
    </Route>
    <Route exact path="/about">
      About
    </Route>
    <Route exact path="/contact">
      Contact
    </Route>
  </Router>,
  document.getElementById("root")
);

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import TaxExodus from "./Containers/TaxExodus";
import GoldenState from "./Containers/GoldenState";
import SuccessMessage from "./Containers/SuccessMessage";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/TaxExodus">
          <TaxExodus />
        </Route>
        <Route exact path="/LeavingCalifornia">
          <GoldenState />
        </Route>
        <Route exact path="/Message">
          <SuccessMessage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

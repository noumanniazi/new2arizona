import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import LeavingCalifornia from "./Containers/LeavingCalifornia";
import GoldenState from "./Containers/GoldenState";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/TaxExodus">
          <LeavingCalifornia />
        </Route>
        <Route exact path="/LeavingCalifornia">
          <GoldenState />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

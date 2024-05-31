import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// views
import Landing from "views/Landing.js";
import Klapihinnasto from "views/Klapihinnasto.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes without layouts */}
      <Route path="/" exact component={Landing} />
      <Route path="/klapihinnasto" exact component={Klapihinnasto} />

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

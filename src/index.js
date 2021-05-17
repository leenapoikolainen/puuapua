import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Metsapalvelut from "views/Metsapalvelut.js";
import Klapipalvelu from "views/Klapipalvelu.js";
import Puunmyynti from "views/Puunmyynti.js";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/" exact component={Landing} />
      <Route path="/metsapalvelut" exact component={Metsapalvelut} />
      <Route path="/klapipalvelu" exact component={Klapipalvelu} />
      <Route path="/puunmyynti" exact component={Puunmyynti} />

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

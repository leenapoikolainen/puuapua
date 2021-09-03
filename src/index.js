import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";



// views 

import Landing from "views/Landing.js";
import Metsapalvelut from "views/Metsapalvelut.js";
import Klapipalvelu from "views/Klapipalvelu.js";
import Puunmyynti from "views/Puunmyynti.js";
import Lisatiedot from "views/Lisatiedot.js";
import Klapihinnasto from 'views/Klapihinnasto.js'



ReactDOM.render(
  <BrowserRouter>
    <Switch>


      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/" exact component={Landing} />
      <Route path="/metsapalvelut" exact component={Metsapalvelut} />
      <Route path="/klapipalvelu" exact component={Klapipalvelu} />
      <Route path="/puunmyynti" exact component={Puunmyynti} />
      <Route path="/lisatietoja" exact component={Lisatiedot} />
      <Route path="/klapihinnasto" exact component={Klapihinnasto} />

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

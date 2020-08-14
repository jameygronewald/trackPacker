import React from "react";
import Nav from "../src/components/Nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import SignUP from "../src/pages/SignUp/SignUp";
import Profile from "../src/pages/Profile/Profile";
import Excursions from "../src/pages/Excursions/Excursions";
import Inventory from "../src/pages/Inventory/Inventory";
import ExcursionInventory from "../src/pages/ExcursionInventory/ExcursionInventory";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/SignUp" component={SignUP} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Excursions" component={Excursions} />
        <Route exact path="/Excursions/:id" component={ExcursionInventory} />
        <Route exact path="/Inventory" component={Inventory} />
      </Router>
    </div>
  );
}

export default App;


      
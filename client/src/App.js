import React, { useState, useEffect } from "react";
import Nav from "../src/components/Nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import SignUP from "../src/pages/SignUp/SignUp";
import Profile from "../src/pages/Profile/Profile";
import Excursions from "../src/pages/Excursions/Excursions";
import Inventory from "../src/pages/Inventory/Inventory";
import ExcursionInventory from "../src/pages/ExcursionInventory/ExcursionInventory";
import { UserContext } from "./utils/UserContext";
import authConfig from "./utils/authConfigHelper";
import API from "./utils/API";
import "./App.css";

function App() {
  const [userToken, setUserToken] = useState();
  const [userData, setUserData] = useState({
    isAuthenticated: false,
  });

const getUserData = config => {
  API.getUserInfo(config)
  .then(response => {
      const userResponse = response.data.body.userObject || undefined;
      userResponse.isAuthenticated = true;
      console.log(userResponse);
      console.log(userData);
      // if (userResponse.firstName === userData.firstName || userResponse.lastName === userData.lastName || userResponse.items === userData.items || userResponse.exursions === userData.excursions) {
      //   return;
      //   } else {
        setUserData({ ...userResponse, isAuthenticated: true });
      // }
    })
    .catch((err) => {
      console.log(err)
    });
};

  useEffect(() => {
    if (localStorage.getItem("sessionToken")) {
      getUserData(authConfig);
    }
  }, [userData.isAuthenticated]);

  return (
    <div>
      <Router>
        <UserContext.Provider
          value={{ userToken, setUserToken, userData, setUserData }}
        >
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignUp" component={SignUP} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Excursions" component={Excursions} />
          <Route exact path="/Excursions/:id" component={ExcursionInventory} />
          <Route exact path="/Inventory" component={Inventory} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Nav from "../src/components/Nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import SignUP from "../src/pages/SignUp/SignUp";
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

  const handleLogin = (token, user) => {
    setUserToken(token);
    localStorage.setItem("sessionToken", token);
    setUserData(user);
  };

  const getUserData = config => {
    console.log(config);
    API.getUserInfo(config)
      .then(response => {
        console.log(response);
        const userResponse = response.data.body.userObject;
        userResponse.isAuthenticated = true;
        setUserData(userResponse);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("sessionToken");
    if (token) {
      setUserToken(token);
      getUserData(authConfig(token));
    }
  }, []);

  return (
    <div>
      <Router>
        <UserContext.Provider
          value={{
            userToken,
            setUserToken,
            userData,
            setUserData,
            handleLogin,
          }}
        >
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignUp" component={SignUP} />
          <Route exact path="/Excursions" component={Excursions} />
          <Route exact path="/Excursions/:id" component={ExcursionInventory} />
          <Route exact path="/Inventory" component={Inventory} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;

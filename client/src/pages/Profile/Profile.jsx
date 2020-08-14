import React, { useState, useEffect, useContext } from "react";
import User from "../../components/User/User";
import ExcursionCard from "../../components/ExcursionCard/ExcursionCard";
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import {UserContext} from "../../utils/UserContext";

const Profile = () => {
  const [excursions, setExcursions] = useState([]);
  const [weather, setWeather] = useState('');
  useEffect(() => {
    showExcursions();
    showWeather();
  }, []);

  const { user, setUser } = useContext(UserContext);

  function showWeather () {
    API.getWeather()
    .then(res => {
      setWeather(res.data.main);
      console.log(res.data.main);
    })
  }

  function showExcursions() {
    API.getExcursions()
      .then((res) => {
        setExcursions(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={3}>
          <User />
        </Grid>
        <Grid item xs={12} sm={9}>
          <ExcursionCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;

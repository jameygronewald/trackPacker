import React, { useState, useEffect, useContext } from "react";
import User from "../../components/User/User";
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";

const Profile = () => {
  const [excursions, setExcursions] = useState([])
  useEffect(() => {
    showExcursions();
  }, []);

  const showExcursions = () => {
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;

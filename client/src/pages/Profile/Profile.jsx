import React from "react";
import Grid from "@material-ui/core/Grid";
import User from "../../components/User/User";
import ExcursionCard from "../../components/ExcursionCard/ExcursionCard";

const Profile = () => {
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

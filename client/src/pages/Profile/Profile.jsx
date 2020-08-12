import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const Profile = () => {
  const [excursions, setExcursions] = useState([]);
  useEffect(() => {
    showExcursions();
  }, []);

  function showExcursions() {
    API.getExcursions()
      .then((res) => {
        setExcursions(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={2}>
          <img
            src="https://www.svgrepo.com/show/44183/male-user.svg"
            alt="User"
          />
        </Grid>
        <Grid item xs={6} sm={4}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={6} sm={3}>
          <Typography>First: Brad</Typography>
          <Typography>Last: Williams</Typography>
          <Typography>
            Bio: Hello there, and thanks for stopping by! My name is Brad
            Williams and I was born and raised right here in Atlanta, Ga. I
            graduated from high school in 2008, where I then went on to study
            Spanish at Auburn University. War Eagle! After graduation, I taught
            Spanish for 2 years in Atlanta, and then picked up my things and
            moved a few thousand miles south to Santiago, Chile! While in Chile,
            I taught English to both children and adults, improving both my
            Spanish language skills and broadening my cultural perspective.
            While it was at times jarring, I loved my time in Chile, the people
            I met and the experiences I gained while living there. After a year,
            I decided to head back to the U.S. where I would go on to work for
            Teach for America in Denver, Colorado. In Denver, I taught math in
            an English as a second language classroom to first generation
            hispanic immigrants.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={6} sm={6}>
          {excursions.map((excursion) => (
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Avatar
                      alt="Mountain"
                      src="https://i.guim.co.uk/img/media/6088d89032f8673c3473567a91157080840a7bb8/413_955_2808_1685/master/2808.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=412cc526a799b2d3fff991129cb8f030"
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={excursion.name}
                  secondary="Jan 9, 2014"
                />
                <button>View Excursion</button>
              </ListItem>
            </List>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;

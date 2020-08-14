import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from '@material-ui/core/Button';
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
        <Grid item xs={12} sm={2}>
          <img
            src="https://www.svgrepo.com/show/44183/male-user.svg"
            alt="User"
            width='300'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
        <Typography>{user}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {weather.temp}
          
        </Grid>
        <Grid item xs={6} sm={3}>
          
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
                <Link to={`/Excursions/${excursion._id}`}>
                  <Button>View Excursion</Button>
                </Link>
              </ListItem>
            </List>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;

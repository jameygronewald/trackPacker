import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";


const Profile = () => {
  const [excursions, setExcursions] = useState([]);
  const [weather, setWeather] = useState("");
  useEffect(() => {
    showExcursions();
    showWeather();
  }, []);

  function showWeather() {
    API.getWeather().then((res) => {
      setWeather(res.data.main);
      console.log(res.data.main);
    });
  }

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
        <Grid item xs={12} sm={3}>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={2}
            mx="auto"
          >
          
            <img
              src="https://www.svgrepo.com/show/44183/male-user.svg"
              alt="User"
              width="150"
            />
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={2}
            mx="auto"
          >
            <Typography variant="h5">Jamey Gronewald</Typography>
          </Box>
          <Divider variant="middle" />
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={1}
            mx="auto"
          >
             <Link to='/Profile'>
                  <Button>Home</Button>
                </Link>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={1}
            mx="auto"
          >
             <Link to='/Inventory'>
                  <Button>Inventory</Button>
                </Link>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={1}
            mx="auto"
          >
             <Link to="/Excursions">
                  <Button>Excursions</Button>
                </Link>
          </Box>
        </Grid>
        {/*    <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={3}></Grid> */}
        
        <Grid item xs={12} sm={9}>
          {excursions.map((excursion) => (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h3" color="textSecondary">
                  {excursion.name} January 10, 2020
                </Typography>
                <Typography variant="h5" component="h2"></Typography>
                <Typography color="textSecondary"></Typography>
                <Typography variant="body2" component="p">
                  A world-renowned ski resort, Squaw Valley was the site of the
                  1960 Olympic Winter Games and offers some of the best ski runs
                  in Lake Tahoe. The resort has 3,600 acres of skiable terrain,
                  29 ski lifts, and more than 170 trails, with the longest run
                  extending for 3.2 miles.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/Excursions/${excursion._id}`}>
                  <Button>View Excursion</Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;

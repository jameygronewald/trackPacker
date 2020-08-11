import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

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
        <Grid container spacing={2}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12} sm={6}>
        <img src='https://www.svgrepo.com/show/44183/male-user.svg' alt='User'/>
        </Grid>
        <Grid item xs={12} sm={6}>
          
        </Grid>
        <Grid item xs={6} sm={3}>
        <Typography>First: Brad</Typography>
        <Typography>Last: Williams</Typography>
        <Typography>Bio: I Love Boots!</Typography>
          </Grid>
        {excursions.map((excursion) => (
          <Grid item xs={6} sm={3}>
          <Card>
          <Avatar alt="Mountain" src="https://i.guim.co.uk/img/media/6088d89032f8673c3473567a91157080840a7bb8/413_955_2808_1685/master/2808.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=412cc526a799b2d3fff991129cb8f030" />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {excursion.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Excursion
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          </Grid>
        ))}
        <Grid item xs={6} sm={3}>
          
        </Grid>
        <Grid item xs={6} sm={3}>
        
        </Grid> 
      </Grid>
      <Container maxWidth="lg">
      </Container>
    </div>
  );
};

export default Profile;

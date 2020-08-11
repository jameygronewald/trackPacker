import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
      <Container maxWidth="lg">
        {excursions.map((excursion) => (
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {excursion.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Rising above a scene rich with extraordinary wildlife,
                  pristine lakes, and alpine terrain, the Teton Range stands as
                  a monument to the people who fought to protect it. These are
                  mountains of the imagination. Mountains that led to the
                  creation of Grand Teton National Park where you can explore
                  over two hundred miles of trails, float the Snake River, and
                  enjoy the serenity of this remarkable place.
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
        ))}
      </Container>
    </div>
  );
};

export default Profile;

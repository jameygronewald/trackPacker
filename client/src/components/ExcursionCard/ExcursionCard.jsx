import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const ExcursionCard = ({ deleteExcursion, excursionId, excursionName }) => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" color="textSecondary">
            {excursionName} January 10, 2020
          </Typography>
          <Typography variant="h5" component="h2"></Typography>
          <Typography color="textSecondary"></Typography>
          <Typography variant="body2" component="p">
            A world-renowned ski resort, Squaw Valley was the site of the 1960
            Olympic Winter Games and offers some of the best ski runs in Lake
            Tahoe. The resort has 3,600 acres of skiable terrain, 29 ski lifts,
            and more than 170 trails, with the longest run extending for 3.2
            miles.
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/Excursions/${excursionId}`}>
            <Button>View Excursion</Button>
          </Link>
          <Button
            onClick={() => {
              deleteExcursion(excursionId);
            }}
          >
            Remove Excursion
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ExcursionCard;

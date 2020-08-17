import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    /* margin: 'auto' */
  },
  title: {
    flexGrow: 1,
    fontFamily: "Montserrat",
    /* textAlign: "center", */
    /* color: 'whitesmoke'  */
  },
  button: {
    justifyContent: "center",
  },
  media: {
    /*   backgroundImage: `url(${"https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"})`, 
     backgroundRepeat: "no-repeat", 
    objectFit: 'cover',  */
  },
}));
const ExcursionCard = ({ deleteExcursion, excursionId, excursionName }) => {
  const classes = useStyles();
  return (
    <>
      <Grow
       in={true}
     
      >
        <Card
          style={{ opacity: "0.8", boxShadow: "10px 10px 5px grey" }}
          className={`${classes.root} ${classes.media}`}
          variant="outlined"
        >
          <CardContent>
            <Typography
              className={classes.title}
              variant="h3"
              color="textSecondary"
            >
              Justin's {excursionName} Excursion
            </Typography>
            <Divider className={classes.title} variant="middle" />
          </CardContent>
          <CardActions>
            <Link to={`/Excursions/${excursionId}`}>
              <Button /* className={classes.title} */>View </Button>
            </Link>
            <Button
              /* className={classes.title} */
              onClick={() => {
                deleteExcursion(excursionId);
              }}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      </Grow>
    </>
  );
};

export default ExcursionCard;

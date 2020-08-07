import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TrackPacker
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/Home">
              <Button color="inherit">Login</Button>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/SignUp">
              <Button color="inherit">Sign-Up</Button>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/Profile">
              <Button color="inherit">Profile</Button>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/Excursion">
              <Button color="inherit">Excursion</Button>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/Inventory">
              <Button color="inherit">Inventory</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

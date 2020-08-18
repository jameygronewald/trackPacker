import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LogoutButton from "../LogoutButton/LogoutButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Montserrat'
  },
  logo: {
    maxWidth: 100,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Toolbar color="transparent" variant="dense">
        <img src="https://i.pinimg.com/originals/60/ea/15/60ea152f0c16025e23573d9e10132d9b.png" alt="logo" className={classes.logo} />
          <Typography variant="h5" className={classes.title}>
            TrackPacker
          </Typography>
          <LogoutButton  />
        </Toolbar>
    </div>
  );
}

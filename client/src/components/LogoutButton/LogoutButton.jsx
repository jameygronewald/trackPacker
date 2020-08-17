import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../../utils/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function LogoutButton() {
  const classes = useStyles();

  const { setUserData } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.clear();
    setUserData({ isAuthenticated: false });
  };

  // return focus to the button when we transitioned from !open -> open

  return (
    <div className={classes.root}>
      <div>
        <Link to="/">
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
}

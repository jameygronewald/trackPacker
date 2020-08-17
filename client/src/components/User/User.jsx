import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ProfileLink from "../ProfileLink/ProfileLink";
import { UserContext } from "../../utils/UserContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Montserrat'
  }
}));

const User = () => {
  const { userData } = useContext(UserContext);
  const classes = useStyles();
  return (
    <>
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        p={2.3}
        mx="auto"
      >
      <Typography className={classes.title} variant="h5">{`${userData.firstName} ${userData.lastName}`}</Typography>
      </Box>
      <Divider variant="middle" />
     {/*  <ProfileLink link="Profile" /> */}
      <ProfileLink link="Inventory" />
      <ProfileLink link="Excursions" />
    </>
  );
};

export default User;

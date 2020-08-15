import React, { useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ProfileLink from "../ProfileLink/ProfileLink";
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API";

const User = () => {
  const { userToken, userData, setUserData } = useContext(UserContext);

  const authConfig = {
    headers: {
      auth: userToken,
    },
  };

  useEffect(() => {
    getUserData(authConfig);
  }, []);

  const getUserData = config => {
    API.getUserInfo(config)
      .then(response => {
        setUserData(response.data.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
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
        <Typography variant="h5">{userData.email}</Typography>
      </Box>
      <Divider variant="middle" />
      <ProfileLink link="Profile" />
      <ProfileLink link="Inventory" />
      <ProfileLink link="Excursions" />
    </>
  );
};

export default User;

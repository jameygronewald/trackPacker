import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
const User = () => {
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
        <Link to="/Profile">
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
        <Link to="/Inventory">
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
    </>
  );
};

export default User;

import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const ProfileLink = ({ link }) => {
  return (
    <Box
      alignItems="center"
      /* justifyContent="center" */
      display="flex"
      p={1}
      mx="auto"
    >
      <Link underline='hover' to={`/${link}`}>
        <Button>{link}</Button>
      </Link>
    </Box>
  );
};

export default ProfileLink;

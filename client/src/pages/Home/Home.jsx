import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const Home = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Box m="2rem" p={2} mx="auto">
          <form className="login">
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <TextField id="standard-basic" label="Email" />
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <TextField id="standard-basic" label="Password" />
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <Button type="submit">
                <Link href="/Profile">Log In</Link>
              </Button>
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <Button>
                <Link href="/SignUp">Sign Up</Link>
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Home;

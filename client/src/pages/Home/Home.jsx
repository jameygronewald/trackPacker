import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";

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

const Home = ({ history }) => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { handleLogin } = useContext(UserContext);

  const handleChange = ({ target: { name, value } }) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.loginUser(userInfo)
      .then((response) => {
        const loggedInUser = response.data.body.userObject;
        loggedInUser.isAuthenticated = true;
        handleLogin(response.data.body.token.sessionToken, loggedInUser);
        history.push("/Inventory");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box m="2rem" p={2} mx="auto">
          <form className="login" onSubmit={handleSubmit}>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <TextField
                onChange={handleChange}
                value={userInfo.email}
                name="email"
                id="standard-basic"
                label="Email"
              />
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <TextField
                onChange={handleChange}
                value={userInfo.password}
                name="password"
                id="standard-basic"
                label="Password"
              />
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
              >
                LOGIN
              </Button>
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <Link href="/SignUp">
                <Button className={classes.button} variant="contained">
                  Sign Up
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Home;

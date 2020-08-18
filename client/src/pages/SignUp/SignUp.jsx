import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useState, useContext } from "react";
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

const SignUp = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { handleLogin } = useContext(UserContext);

  const handleSubmit = event => {
    event.preventDefault();
    const formattedEmail = email.toLowerCase();
    const userInfo = { email: formattedEmail, password: password, firstName: firstName, lastName: lastName };
    API.signUpUser(userInfo)
      .then(response => {
        const newUser = response.data.body.userObject;
        newUser.isAuthenticated = true;
        handleLogin(response.data.body.token.sessionToken, newUser)
        history.push("/Inventory");
      })
      .catch(err => {
        window.alert("Please enter a valid email address.");
      });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box m="2rem" p={2} mx="auto">
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={2}
            mx="auto"
          >
            <Typography variant="h4">Welcome To TrackPacker!</Typography>
          </Box>
          <form onSubmit={handleSubmit} className="login">
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={2}
            mx="auto"
          >
            <TextField id="standard-basic" name="firstName" label="First" value={firstName} onChange={e => {
                  setFirstName(e.target.value);
                }}/>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={2}
            mx="auto"
          >
            <TextField id="standard-basic" name="lastName" label="Last" value={lastName} onChange={e => {
                  setLastName(e.target.value);
                }}/>
          </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <TextField
                id="standard-basic"
                name="email"
                label="Email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
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
                id="standard-basic"
                name="password"
                label="Password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
              <Button type="submit" className={classes.button} variant="contained">
                Create Account
              </Button>
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              p={2}
              mx="auto"
            >
                <Link href="/">
              <Button className={classes.button} variant="contained">
                Back To Login
              </Button>
                </Link>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;

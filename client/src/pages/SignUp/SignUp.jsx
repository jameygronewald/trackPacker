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

const SignUp = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { setUserToken, setUserData, userData } = useContext(UserContext);

  const handleSubmit = event => {
    event.preventDefault();
    const formattedEmail = email.toLowerCase();
    const userInfo = { email: formattedEmail, password: password, firstName: firstName, lastName: lastName };
    API.signUpUser(userInfo)
      .then(response => {
        localStorage.setItem("sessionToken", response.data.body.token.sessionToken);
        setUserToken(response.data.body.token.sessionToken);
        const newUser = response.data.body.userObject;
        setUserData({ /* ...userData, */ ...newUser, isAuthenticated: true });
        history.push("/Profile");
      })
      .catch(err => {
        console.log(err);
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
              <Button type="submit">
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
              <Button>
                <Link href="/">Back To Login</Link>
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;

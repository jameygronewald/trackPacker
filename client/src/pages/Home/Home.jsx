import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API";

const Home = ({ history }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { setUserToken } = useContext(UserContext);

  const handleChange = ({ target: { name, value } }) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.loginUser(userInfo)
      .then(response => {
        setUserToken(response.data.data.sessionToken);
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
              <Button type="submit">
                LOGIN{/*<Link href="/Profile">Log In</Link> */}
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

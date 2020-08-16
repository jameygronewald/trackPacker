import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import ExcursionCard from "../../components/ExcursionCard/ExcursionCard";
import User from "../../components/User/User";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { UserContext } from "../../utils/UserContext";
import authConfig from "../../utils/authConfigHelper";

const Excursions = ({ history }) => {
  const [excursions, setExcursions] = useState([]);
  const [newExcursion, setNewExcursion] = useState("");

  const { userToken, userData, setUserData } = useContext(UserContext);

  // useEffect(() => {
  //   showUserExcursions(authConfig);
  // }, []);

  // const showUserExcursions = config => {
  //   API.getExcursions(config)
  //     .then(response => {
  //       setExcursions(response.data.data.excursions);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleChange = ({ target: { value } }) => {
    setNewExcursion(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const excursionObj = { name: newExcursion }
    API.addExcursion(excursionObj, authConfig)
      .then(response => {
        setExcursions([...excursions, response.data.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteExcursion = id => {
    API.deleteExcursion(id, authConfig)
      .then(response => {
        console.log(response.data.data);
        const updatedUser = userData;
        const updatedExcursions = userData.excursions.filter(excursion => excursion != response.data.data);
        console.log(updatedExcursions);
        updatedUser.excursions = updatedExcursions;
        console.log(updatedUser);
        setUserData({ ...updatedUser, isAuthenticated: true })
      })
      .catch(err => {
        console.log(err);
      });
    // showUserExcursions(authConfig);
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={3}>
          <User />
        </Grid>
        <Grid item xs={12} sm={9}>
          <form onSubmit={handleSubmit}>
            <TextField
              name="newExcursion"
              placeholder="Add an Excursion"
              onChange={handleChange}
            ></TextField>
            <Button type="submit">Submit</Button>
          </form>

          {userData.excursions &&
            userData.excursions.map(excursion => (
              <Box
                alignItems="center"
                justifyContent="center"
                display="flex"
                p={1}
                mx="auto"
              >
                <ExcursionCard
                  excursionId={excursion._id}
                  excursionName={excursion.name}
                  deleteExcursion={deleteExcursion}
                />
              </Box>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Excursions;

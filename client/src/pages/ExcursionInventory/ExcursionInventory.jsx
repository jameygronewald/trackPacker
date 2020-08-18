import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ExcursionInventoryListAdd from "../../components/ExcursionInventoryListAdd/ExcursionInventoryListAdd";
import ExcursionInventoryList from "../../components/ExcursionInventoryList/ExcursionInventoryList";
import User from "../../components/User/User";
import ExcursionInventoryWishList from "../../components/ExcursionInventoryWishList/ExcursionInventoryWishList";
import authConfig from "../../utils/authConfigHelper";
import { UserContext } from "../../utils/UserContext";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    /*  flexGrow: 1, */
    fontFamily: "Montserrat",
    /* textAlign: "center", */
  },
  list: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const ExcursionInventory = () => {
  const { userData, setUserData, userToken } = useContext(UserContext);
  const { id } = useParams();
  const excursionId = id;
  const classes = useStyles();

  const [currentExcursion, setCurrentExcursion] = useState({});

  useEffect(() => {
    console.log(authConfig(localStorage.getItem("sessionToken")));
    API.getExcursion(id, authConfig(localStorage.getItem("sessionToken")))
      .then((response) => {
        console.log(response);
        const excursionState = response.data.data;
        setCurrentExcursion(excursionState);
        // console.log(currentExcursion);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToExcursion = (id) => {
    let currentExcursionData = userData.excursions.reduce(
      (excursionObject, excursion) =>
        excursion._id === excursionId
          ? (excursionObject = { ...excursion })
          : excursionObject,
      {}
    );
    currentExcursionData.items.push(id);
    const itemObj = { items: currentExcursionData.items };
    API.updateExcursionInventory(
      currentExcursionData._id,
      itemObj,
      authConfig(userToken)
    )
      .then((response) => {
        // console.log("back data: ", response.data.data);
        setCurrentExcursion(response.data.data);
        // console.log("state set", currentExcursion);
        currentExcursionData = response.data.data;
        // console.log("mutated var", currentExcursionData);
        setUserData({ ...userData, isAuthenticated: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={2}>
          <User />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Box
            display="flex"
            p={0.8}
            mx="auto"
            
          >
            <Typography className={classes.title} variant="h3">
              {currentExcursion.name}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Grid container spacing={1}>
            <Grid className={classes.list} item xs={12} sm={6}>
              <Typography className={classes.title} variant="h5">
                Inventory
              </Typography>
              <Divider className={classes.list} variant="middle" />

              <ExcursionInventoryListAdd
                addToExcursion={addToExcursion}
              ></ExcursionInventoryListAdd>
            </Grid>
            <Grid className={classes.list} item xs={12} sm={6}>
              <Typography className={classes.title} variant="h5">
                Inventory for {currentExcursion.name}
              </Typography>
              <Divider className={classes.list} variant="middle" />
              {currentExcursion.items &&
                currentExcursion.items
                  .filter((item) => item.status === "Inventory")
                  .map((item, index) => (
                    <ExcursionInventoryList
                      key={index}
                      itemName={item.name}
                      itemId={item._id}
                      // deleteFromExcursion={deleteFromExcursion}
                    ></ExcursionInventoryList>
                  ))}

              <Typography className={classes.title} variant="h5">
                Wishlist for {currentExcursion.name}
              </Typography>
              <Divider className={classes.list} variant="middle" />
              {currentExcursion.items &&
                currentExcursion.items
                  .filter((item) => item.status === "Wishlist")
                  .map((item, index) => (
                    <ExcursionInventoryWishList
                      key={index}
                      itemName={item.name}
                      itemId={item._id}
                      // deleteFromExcursion={deleteFromExcursion}
                    ></ExcursionInventoryWishList>
                  ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExcursionInventory;

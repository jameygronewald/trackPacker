import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ExcursionInventoryListAdd from "../../components/ExcursionInventoryListAdd/ExcursionInventoryListAdd";
import ExcursionInventoryList from "../../components/ExcursionInventoryList/ExcursionInventoryList";
import User from "../../components/User/User";
import ExcursionInventoryWishList from "../../components/ExcursionInventoryWishList/ExcursionInventoryWishList";
import { UserContext } from "../../utils/UserContext";

const ExcursionInventory = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { id } = useParams();
  const excursionId = id;

  let currentExcursionData = userData.excursions.reduce(
    (excursionObject, excursion) =>
      excursion._id === excursionId
        ? (excursionObject = { ...excursion })
        : (excursionObject),
    {}
  );

  const [currentExcursion, setCurrentExcursion] = useState({});

  useEffect(() => {
    API.getExcursion(id)
      .then(response => {
        // console.log(response.data.data);
        const excursionState = response.data.data;
        setCurrentExcursion(excursionState);
        // console.log(currentExcursion);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addToExcursion = id => {
    currentExcursionData.items.push(id);
    const itemObj = { items: currentExcursionData.items };
    API.updateExcursionInventory(currentExcursionData._id, itemObj)
      .then(response => {
        // console.log("back data: ", response.data.data);
        setCurrentExcursion(response.data.data);
        // console.log("state set", currentExcursion);
        currentExcursionData = response.data.data;
        // console.log("mutated var", currentExcursionData);
        setUserData({ ...userData, isAuthenticated: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const deleteFromExcursion = id => {
  //   console.log(id);
  //   console.log(currentExcursionData.items);
  //   const updatedExcursionData = currentExcursionData.items.filter(itemId => itemId != id);
  //   console.log(updatedExcursionData);
  //   const excursionItemObj = { items: updatedExcursionData };
  //   API.updateExcursionInventory(currentExcursionData._id, excursionItemObj)
  //     .then(response => {
  //       console.log("back data: ", response.data.data);
  //       setCurrentExcursion(response.data.data);
  //       console.log("state set", currentExcursion);
  //       currentExcursionData = response.data.data;
  //       console.log("mutated var", currentExcursionData);
  //       setUserData({ ...userData, isAuthenticated: true });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={3}>
          <User />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={2}
            mx="auto"
          ></Box>
          <h1>{currentExcursion.name}</h1>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <h2>Inventory</h2>
              <ExcursionInventoryListAdd
                addToExcursion={addToExcursion}
              ></ExcursionInventoryListAdd>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>Inventory for {currentExcursion.name}</h2>
              {currentExcursion.items &&
                currentExcursion.items
                  .filter(item => item.status === "Inventory")
                  .map(item => (
                    <ExcursionInventoryList
                      key={item._id}
                      itemName={item.name}
                      itemId={item._id}
                      // deleteFromExcursion={deleteFromExcursion}
                    ></ExcursionInventoryList>
                  ))}
              <br></br>
              <h2>Wishlist for {currentExcursion.name}</h2>
              {currentExcursion.items &&
                currentExcursion.items
                  .filter(item => item.status === "Wishlist")
                  .map(item => (
                    <ExcursionInventoryWishList
                      key={item._id}
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

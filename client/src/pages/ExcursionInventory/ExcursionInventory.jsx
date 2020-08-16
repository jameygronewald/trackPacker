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

const ExcursionInventory = (props) => {
  const { id } = useParams();
  const excursionId = id;

  const [excursion, setExcursion] = useState({});
  const [inventory, setInventory] = useState([]);

  const { userData } = useContext(UserContext);

  const currentExcursion = userData.excursions.reduce((excursionObject, excursion)=> excursion._id == excursionId ? excursionObject = {...excursion} : excursionObject = excursionObject, {});

  // useEffect(() => {
  //   API.getExcursion(id)
  //     .then((response) => {
  //       setExcursion(response.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [excursion]);

  const addToExcursion = (id) => {
    currentExcursion.items.push(id);
    let itemObj = { items: currentExcursion.items };
    API.updateExcursionInventory(currentExcursion._id, itemObj)
      .then((response) => {
        setExcursion(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                inventory={userData.items}
                addToExcursion={addToExcursion}
              ></ExcursionInventoryListAdd>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>Inventory for {currentExcursion.name}</h2>
              {currentExcursion.items &&
                currentExcursion.items
                  .filter((item) => item.status === "Inventory")
                  .map((item) => (
                    <ExcursionInventoryList
                      itemName={item.name}
                      itemId={item._id}
                      addToExcursion={addToExcursion}
                    ></ExcursionInventoryList>
                  ))}
              <br></br>
              <h2>Wishlist for {currentExcursion.name}</h2>
              {currentExcursion.items &&
                currentExcursion.items
                  .filter((item) => item.status === "Wishlist")
                  .map((item) => (
                    <ExcursionInventoryWishList
                      wishListName={item.name}
                      wishListId={item._id}
                      addToExcursion={addToExcursion}
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

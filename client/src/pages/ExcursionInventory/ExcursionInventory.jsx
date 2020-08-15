import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ExcursionInventoryListAdd from "../../components/ExcursionInventoryListAdd/ExcursionInventoryListAdd";
import ExcursionInventoryList from "../../components/ExcursionInventoryList/ExcursionInventoryList";
import User from "../../components/User/User";
import ExcursionInventoryWishList from "../../components/ExcursionInventoryWishList/ExcursionInventoryWishList";

const ExcursionInventory = (props) => {
  const { id } = useParams();

  const [excursion, setExcursion] = useState({});
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    API.getExcursion(id)
      .then((response) => {
        setExcursion(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    API.getItems()
      .then((response) => {
        setInventory(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [excursion]);

  const addToExcursion = (id) => {
    excursion.items.push(id);
    let itemObj = { items: excursion.items };
    API.updateExcursionInventory(excursion._id, itemObj)
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
          <h1>{excursion.name}</h1>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <h2>Inventory</h2>
              <ExcursionInventoryListAdd
                inventory={inventory}
                addToExcursion={addToExcursion}
              ></ExcursionInventoryListAdd>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>Inventory for {excursion.name}</h2>
              {excursion.items &&
                excursion.items
                  .filter((item) => item.status === "Inventory")
                  .map((item) => (
                    <ExcursionInventoryList
                      itemName={item.name}
                      itemId={item._id}
                      addToExcursion={addToExcursion}
                    ></ExcursionInventoryList>
                  ))}
              <br></br>
              <h2>Wishlist for {excursion.name}</h2>
              {excursion.items &&
                excursion.items
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

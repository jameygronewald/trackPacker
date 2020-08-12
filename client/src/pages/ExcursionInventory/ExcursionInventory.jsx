import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import { useParams } from "react-router-dom";

const ExcursionInventory = props => {
  const { id } = useParams();

  const [excursion, setExcursion] = useState({});
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    API.getExcursion(id)
      .then(response => {
        setExcursion(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    API.getItems()
      .then(response => {
        setInventory(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addToExcursion = id => {
    let itemObj = {};
    itemObj.id = id;
    console.log(itemObj);
    console.log(excursion);
    API.updateExcursionInventory(excursion._id, itemObj)
      .then(response => {
        setExcursion(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>{excursion.name} Excursion</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Inventory</h2>
          <ul>
            {inventory.map(item => (
              <>
                <li>{item.name}</li>
                <button
                  onClick={() => {
                    addToExcursion(item._id);
                  }}
                >
                  Add to Excursion
                </button>
              </>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Inventory for {excursion.name}</h2>
          <ul>
            <li>Excursion Inventory Item 1</li>
            <li>Excursion Inventory Item 2</li>
            <li>Excursion Inventory Item 3</li>
          </ul>
          <br></br>
          <h2>Wishlist for {excursion.name}</h2>
          <ul>
            <li>Wishlist Item 1</li>
            <li>Wishlist Item 2</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExcursionInventory;

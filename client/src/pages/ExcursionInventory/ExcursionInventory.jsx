import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class ExcursionInventory extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>(Excursion Name) Excursion</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>Inventory</h2>
            <ul>
              <li>Inventory Item 1</li>
              <li>Inventory Item 2</li>
              <li>Inventory Item 3</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>Inventory for (Excursion Name)</h2>
            <ul>
              <li>Excursion Inventory Item 1</li>
              <li>Excursion Inventory Item 2</li>
              <li>Excursion Inventory Item 3</li>
            </ul>
            <br></br>
            <h2>Wishlist for (Excursion Name)</h2>
            <ul>
              <li>Wishlist Item 1</li>
              <li>Wishlist Item 2</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ExcursionInventory;

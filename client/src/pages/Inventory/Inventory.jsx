import React, { useState, useContext, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Checkbox from "@material-ui/core/Checkbox";
import API from "../../utils/API";
import InventoryList from "../../components/InventoryList/InventoryList";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import User from "../../components/User/User";
import { UserContext } from "../../utils/UserContext";
import authConfig from "../../utils/authConfigHelper";

const Inventory = () => {
  const [newItem, setNewItem] = useState({
    name: "",
    status: "Inventory",
  });

  const { userToken, userData, setUserData } = useContext(UserContext);

  let textInput = useRef(null);

  const handleChange = ({ target: { value } }) => {
    setNewItem({ ...newItem, name: value });
  };
// ADD ITEM TO INVENTORY
  const handleSubmit = event => {
    event.preventDefault();
    API.addItem(newItem, authConfig)
      .then(response => {
        const updatedUser = userData;
        updatedUser.items.push(response.data.data);
        setUserData({ ...updatedUser, isAuthenticated: true});
        setNewItem({ name: "", status: "Inventory" });
      })
      .catch(err => console.log(err));
  };

  const toggleChecked = e => {
    e.target.checked
      ? setNewItem({ ...newItem, status: "Wishlist" })
      : setNewItem({ ...newItem, status: "Inventory" });
  };

  const updateItem = item => {
    item.status === "Wishlist"
      ? (item.status = "Inventory")
      : (item.status = "Wishlist");
    API.updateItem(item, authConfig)
      .then(response => {
        setUserData({ ...userData, isAuthenticated: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteItem = id => {
    API.deleteItem(id, authConfig)
      .then(response => {
        const updatedInventory = userData.items.filter(item => item._id != response.data.data._id);
        const updatedUser = userData;
        updatedUser.items = updatedInventory;
        setUserData({ ...updatedUser, isAuthenticated: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={2}>
          <User />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box
            style={{
              marginTop: "10px",
            }}
          >
            <form
              align="center"
              onSubmit={handleSubmit}
              style={{
                borderStyle: "outset",
                borderColor: "#a1a1a1",
              }}
            >
              <TextField
                id="standard-basic"
                label="Add New Item"
                name="newItem"
                refs="textEl"
                inputRef={textInput}
                placeholder="Add an Item"
                onChange={handleChange}
                style={{ color: "#13160e", borderColor: "#13160e" }}
              />
              <Button
                onClick={() => {
                  setTimeout(() => {
                    textInput.current.value = "";
                  }, 100);
                }}
                type="submit"
                variant="outlined"
                size="large"
                color="default"
                style={{ color: "#13160e", borderColor: "#13160e" }}
                className={classes.margin}
              >
                Add to Inventory
              </Button>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name="wishlist"
                    id="wishlist"
                    style={{ color: "#832d33", borderColor: "#13160e" }}
                    onChange={toggleChecked}
                  />
                }
                label="Add to Wishlist"
              />
            </form>
            <InventoryList
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Inventory;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Checkbox from "@material-ui/core/Checkbox";
import API from "../../utils/API";
import InventoryList from "../../components/InventoryList/InventoryList";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    status: 'Inventory'
  });

  useEffect(() => {
    showItems();
  }, []);

  const showItems = () => {
    API.getItems()
      .then(res => {
        setItems(res.data.data);
      })
      .catch(err => console.log(err));
  };

  const handleChange = ({ target: { value } }) => {
    setNewItem({...newItem, name: value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.addItem(newItem).then(response => {
      setItems([...items, response.data.data]);
    });
  };

  const toggleChecked = e => {
    e.target.checked ? setNewItem({...newItem, status: "Wishlist"}) : setNewItem({...newItem, status: "Inventory"});
  };

  const deleteItem = id => {
    API.deleteItem(id)
      .then(response => {
        console.log('Item deleted.');
      })
      .catch(err => {
        console.log(err);
      });
    API.getItems()
      .then(res => {
        setItems(res.data.data);
      })
      .catch(err => console.log(err));
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
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add New Item"
          variant="outlined"
          name="newItem"
          placeholder="Add an Item"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
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
              onChange={toggleChecked}
            />
          }
          label="Add to Wishlist"
        />
      </form>
      <InventoryList deleteItem={deleteItem} inventory={items} />
    </div>
  );
};

export default Inventory;

import React, { useState, useEffect } from "react";
import API from "../../utils/API";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
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
    setNewItem(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.addItem(newItem).then(response => {
      setItems([...items, response.data.data]);
    });
  };

  const deleteItem = id => {
    API.deleteItem(id)
      .then(response => {
        console.log(response);
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="newItem"
          placeholder="Add an Item"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <input type="checkbox" id="wishlist" name="wishlist" />
        <label for="wishlist">Add Item to Wishlist</label>
      </form>
      <ul>
        {items.map(item => (
          <div>
            <li>{item.name}</li>
            <button onClick={() => {deleteItem(item._id)}}>Delete Item</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;

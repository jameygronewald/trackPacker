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
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = ({ target: { value } }) => {
    setNewItem(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.addItem(newItem).then((response) => {
      setItems([...items, response.data.data]);
    });
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
        <input type="checkbox" id="wishlist" name="wishlist"/>
        <label for="wishlist">Add Item to Wishlist</label>
      </form>
      <ul>
        {items.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;

import React, { useState, useEffect } from "react";
import API from "../../utils/API";

const Inventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    showItems();
  }, []);
  function showItems() {
    API.getItems()
      .then((res) => {setItems(res.data.data); console.log(res.data.data)})
      .catch((err) => console.log(err));
  }

  return <div>
    <ul>
    {items.map(item => (
      <li>{item.name}</li>
    ))}
    </ul>
  </div>;
};

export default Inventory;

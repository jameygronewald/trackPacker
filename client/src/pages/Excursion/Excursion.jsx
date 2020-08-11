import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import List from "@material-ui/core/List";

const Excursions = () => {

  const [excursions, setExcursions] = useState([]);
  useEffect(() => {
    showExcursions();
  }, []);

  function showExcursions() {
    API.getExcursions()
      .then((res) => {setExcursions(res.data.data); console.log(res.data.data)})
      .catch((err) => console.log(err));
  }
  return <div>
    <ul>
    {excursions.map(excursion => (
      <li>{excursion.name}</li>
    ))}
    </ul>
  </div>;
};

export default Excursions;
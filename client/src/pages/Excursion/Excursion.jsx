import React, { useState, useEffect } from "react";
import API from "../../utils/API";
// import List from "@material-ui/core/List";

const Excursions = () => {
  const [excursions, setExcursions] = useState([]);
  const [newExcursion, setNewExcursion] = useState("");
  useEffect(() => {
    showExcursions();
  }, []);

  function showExcursions() {
    API.getExcursions()
      .then((res) => {
        setExcursions(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  const handleChange = ({ target: { value } }) => {
    setNewExcursion(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.addExcursion(newExcursion).then((res) => {
      setNewExcursion([...excursions, res.data.data]);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="newExcursion"
          placeholder="Add an Excursion"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {excursions.map((excursions) => (
          <li>{excursions.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Excursions;

import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

const Excursions = () => {
  const [excursions, setExcursions] = useState([]);
  const [newExcursion, setNewExcursion] = useState("");
  useEffect(() => {
    showExcursions();
  }, []);

  const showExcursions = () => {
    API.getExcursions()
      .then(res => {
        setExcursions(res.data.data);
      })
      .catch(err => console.log(err));
  };

  const handleChange = ({ target: { value } }) => {
    setNewExcursion(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    API.addExcursion(newExcursion).then(res => {
      setExcursions([...excursions, res.data.data]);
    });
  };

  const deleteExcursion = id => {
    API.deleteExcursion(id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    API.getExcursions()
      .then(res => {
        setExcursions(res.data.data);
      })
      .catch(err => console.log(err));
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
        {excursions.map(excursion => (
          <div>
            <li>{excursion.name}</li>
            <Link to={`/Excursions/${excursion._id}`}>
              <button>View Details</button>
            </Link>
            <button
              onClick={() => {
                deleteExcursion(excursion._id);
              }}
            >
              Remove Excursion
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Excursions;

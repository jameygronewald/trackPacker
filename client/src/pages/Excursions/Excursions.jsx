import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import ExcursionCard from "../../components/ExcursionCard/ExcursionCard";
import User from "../../components/User/User";

const Excursions = () => {
  const [excursions, setExcursions] = useState([]);
  const [newExcursion, setNewExcursion] = useState("");
  useEffect(() => {
    showExcursions();
  }, []);

  const showExcursions = () => {
    API.getExcursions()
      .then((res) => {
        setExcursions(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = ({ target: { value } }) => {
    setNewExcursion(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.addExcursion(newExcursion).then((res) => {
      setExcursions([...excursions, res.data.data]);
    });
  };

  const deleteExcursion = (id) => {
    API.deleteExcursion(id)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    API.getExcursions()
      .then((res) => {
        setExcursions(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          <User />
        </Grid>
        <Grid item xs={12} sm={9}>
          <form onSubmit={handleSubmit}>
            <input
              name="newExcursion"
              placeholder="Add an Excursion"
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          {excursions.map((excursion) => (
            <ExcursionCard
              excursionId={excursion._id}
              excursionName={excursion.name}
              deleteExcursion={deleteExcursion}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Excursions;

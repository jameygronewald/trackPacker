import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import ExcursionCard from "../../components/ExcursionCard/ExcursionCard";

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
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={2}
            mx="auto"
          >
            <img
              src="https://www.svgrepo.com/show/44183/male-user.svg"
              alt="User"
              width="150"
            />
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={2}
            mx="auto"
          >
            <Typography variant="h5">Jamey Gronewald</Typography>
          </Box>
          <Divider variant="middle" />
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={1}
            mx="auto"
          >
            <Link to="/Profile">
              <Button>Home</Button>
            </Link>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={1}
            mx="auto"
          >
            <Link to="/Inventory">
              <Button>Inventory</Button>
            </Link>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            p={1}
            mx="auto"
          >
            <Link to="/Excursions">
              <Button>Excursions</Button>
            </Link>
          </Box>
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
            <ExcursionCard excursionId={excursion._id} excursionName={excursion.name} deleteExcursion={deleteExcursion} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Excursions;

import React, { useState, useEffect, useContext } from "react";
import User from "../../components/User/User";
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import { UserContext } from "../../utils/UserContext";

const Profile = () => {
  const [excursions, setExcursions] = useState([]);
  const [feelsLike, setFeelsLike] = useState("");
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState("");
  const [iconID, setIconID] = useState("");
  useEffect(() => {
    showExcursions();
    showWeather();
  }, []);

  const { user, setUser } = useContext(UserContext);

  function showWeather() {
    API.getWeather().then((res) => {
      console.log(res.data)
 /*      setFeelsLike(res.data.main.feels_like); */
      setMainTemp(res.data.list[0].main.temp);
   /*    setDescription(res.data.weather[0].description);
      setMain(res.data.weather[0].main);
      setIconID(res.data.weather[0].icon); */
    });
  }

  function showExcursions() {
    API.getExcursions()
      .then((res) => {
        setExcursions(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={3}>
          <User />
        </Grid>
        <Grid item xs={12} sm={9}>
          <h1>{mainTemp}</h1>
        {/*   <h1>{feelsLike}</h1>
          <h1>{main}</h1>
          <h1>{description}</h1>
          <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;

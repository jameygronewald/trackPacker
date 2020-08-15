import axios from "axios";

export default {
  addUser: function (user) {
    return axios.post("/api/users", user);
  },

  getUserInfo: function (config) {
    return axios.get("api/users", config);
  },

  getUserInventory: function (config) {
    return axios.get("api/inventory", config)
  },

  loginUser: function (user) {
    return axios.post("/api/login", user);
  },

  signUpUser: function (user) {
    return axios.post("/api/signup", user)
  },

  getItems: function () {
    return axios.get("/api/items");
  },

  getUserItem: function () {
    return axios.get("/api/items/:id");
  },

  addItem: function (item, config) {
    return axios.post("/api/items", item, config);
  },

  updateItem: function (item) {
    return axios.put("/api/items", item);
  },

  deleteItem: function (id) {
    return axios.delete("/api/items/" + id);
  },

  getExcursions: function (config) {
    return axios.get("/api/excursions", config);
  },

  getExcursion: function (id) {
    return axios.get("/api/excursions/" + id);
  },

  addExcursion: function (name) {
    return axios.post("/api/excursions", { name });
  },

  deleteExcursion: function (id) {
    return axios.delete("/api/excursions/" + id);
  },

  updateExcursionInventory: function (id, item) {
    return axios.put("/api/excursions/" + id, item);
  },
 /*  http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=3f40f6c653ada73b131b1bb93e6ed9c3 */
  getWeather: function(){
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=3f40f6c653ada73b131b1bb93e6ed9c3');
  },
};

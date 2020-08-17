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

  updateItem: function (item, config) {
    return axios.put("/api/items", item, config);
  },

  deleteItem: function (id, config) {
    return axios.delete("/api/items/" + id, config);
  },

  getExcursions: function (config) {
    return axios.get("/api/excursions", config);
  },

  getExcursion: function (id, config) {
    return axios.get("/api/excursions/" + id, config);
  },

  addExcursion: function (excursion, config) {
    return axios.post("/api/excursions", excursion, config);
  },

  deleteExcursion: function (id, config) {
    return axios.delete("/api/excursions/" + id, config);
  },

  updateExcursionInventory: function (id, item, config) {
    return axios.put("/api/excursions/" + id, item, config);
  },
};

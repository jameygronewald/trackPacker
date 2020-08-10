import axios from "axios";

export default {
  getItems: function () {
    return axios.get("/api/items");
  },

  getItem: function () {
    return axios.get("/api/items/:id");
  },

  addItem: function() {
    return axios.post("/api/items"/* , { name, status } */);
  },

  getExcursions: function() {
    return axios.get("/api/excursions");
  },

  getExcursion: function() {
    return axios.get("/api/excursions/:id");
  },

  addExcursion: function() {
    return axios.post("/api/excursions"/*  { name } */);
  }, 


};

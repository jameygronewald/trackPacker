import axios from "axios";

export default {
  getItems: function () {
    return axios.get("/api/items");
  },

  getUserItem: function () {
    return axios.get("/api/items/:id");
  },

  addItem: function(name) {
    return axios.post("/api/items", { name });
  },

  getExcursions: function() {
    return axios.get("/api/excursions");
  },

  getExcursion: function() {
    return axios.get("/api/excursions/:id");
  },

  addExcursion: function(name) {
    return axios.post("/api/excursions", { name });
  }, 

};

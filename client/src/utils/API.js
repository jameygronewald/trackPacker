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

  deleteItem: function(id) {
    return axios.delete('/api/items/' + id);
  },

  getExcursions: function() {
    return axios.get("/api/excursions");
  },

  getExcursion: function(id) {
    return axios.get("/api/excursions/" + id);
  },

  addExcursion: function(name) {
    return axios.post("/api/excursions", { name });
  }, 
  
  deleteExcursion: function(id) {
    return axios.delete('/api/excursions/' + id);
  },

};

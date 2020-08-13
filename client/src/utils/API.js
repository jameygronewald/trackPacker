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

  updateInventory: function(id, item) {
    return axios.put('/api/items/' + id, item);
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

  updateExcursionInventory: function(id, itemId) {
    return axios.put('/api/excursions/' + id, itemId);
  },

  getWeather: function(){
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=3f40f6c653ada73b131b1bb93e6ed9c3');
  }

};

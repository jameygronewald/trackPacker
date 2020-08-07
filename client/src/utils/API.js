import axios from "axios";

export default {
  getItems: function () {
    return axios.get("/api/items");
  },
};

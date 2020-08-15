// import axios from "axios";

// export default axios.create({
//   headers: {
//     auth: localStorage.getItem("sessionToken"),
//   },
// });

const authConfig = {
    headers: {
      auth: localStorage.getItem("sessionToken"),
    },
  };

export default authConfig;
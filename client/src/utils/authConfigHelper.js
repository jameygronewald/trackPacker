const authConfig = {
    headers: {
      auth: localStorage.getItem("sessionToken"),
    },
  };

export default authConfig;
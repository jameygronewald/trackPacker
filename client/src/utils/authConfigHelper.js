const authConfig = (token) => {
  const configHeaders = {
    headers: {
      auth: token
    }
  };  
  return configHeaders;
  };

export default authConfig;
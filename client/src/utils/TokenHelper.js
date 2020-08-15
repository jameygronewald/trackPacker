const jwt = require("jsonwebtoken");

const generateToken = id => {
  const token = {
    sessionToken: signjwt(id),
  };
  return token;
};

const signjwt = id => {
  return jwt.sign(
    {
      data: id,
    },
    "tokenSecret",
    { expiresIn: "1h" }
  );
};

const verifyToken = tokenValue => {
  return jwt.verify(tokenValue, "tokenSecret");
};

module.exports = { generateToken, verifyToken };

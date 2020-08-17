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
    { expiresIn: "7d" }
  );
};

const verifyToken = tokenValue => {
  return jwt.verify(tokenValue, "tokenSecret");
};

module.exports = { generateToken, verifyToken };

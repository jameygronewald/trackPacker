const express = require("express");
const router = express.Router();
const db = require("../models");
const { verifyToken } = require("../client/src/utils/tokenHelper");

router.get("/api/inventory", (req, res) => {
  try {
    verifyToken(req.headers.auth);
    let userId = verifyToken(req.headers.auth).data;
    db.User.findOne({ _id: userId })
      .populate("items")
      .then(userData => {
        console.log(userData);
        res.json({
          error: false,
          data: userData,
          message: "Successfully retrieved user's inventory data.",
        });
      })
      .catch(err => {
        res.status(500).json({
          error: true,
          data: null,
          message: "Error retrieving user's inventory data.",
        });
      });
  } catch (error) {
    console.error(error);
    res.status(401).redirect("/");
  }
});

module.exports = router;

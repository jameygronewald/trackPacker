const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/api/users", (req, res) => {
    db.User.find({})
      .then(userData => {
        res.json({
          error: false,
          data: userData,
          message: "Successfully retrieved all user data.",
        });
      })
      .catch(err => {
        res.status(500).json({
          error: true,
          data: null,
          message: "Error retrieving user data.",
        });
      });
  });
  
  router.post("/api/users", (req, res) => {
    db.User.create(req.body)
      .then(newUserData => {
        res.json({
          error: false,
          data: newUserData,
          message: "Successfully added new user.",
        });
      })
      .catch(err => {
        res.status(500).json({
          error: true,
          data: null,
          message: "Error adding new user to database.",
        });
      });
  });

module.exports = router;
const express = require("express");
const router = express.Router();
const db = require("../models");
const { verifyToken } = require("../client/src/utils/tokenHelper");

// Find all users
router.get("/api/users/all", (req, res) => {
  db.User.find({})
    .then(userData => {
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
    });
});

// Find a user's data
router.get("/api/users", (req, res) => {
  try {
    verifyToken(req.headers.auth);
    let userId = verifyToken(req.headers.auth).data;
    db.User.find({ _id: userId })
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
  } catch (error) {
    console.error(error);
    res.status(401).redirect("/");
  }
});

// Find one user and all items in their inventory
router.get("/api/users/:id", (req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate("items")
    .then(userData => {
      res.json({
        error: false,
        data: userData,
        message: "Successfully retrieved single user data.",
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

router.put("/api/users/:id", (req, res) => {
  db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(userData => {
      res.json({
        error: false,
        data: userData,
        message: "Successfully updated user data.",
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

module.exports = router;

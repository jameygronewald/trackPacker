const express = require("express");
const router = express.Router();
const db = require("../models");
const { generateToken } = require("../client/src/utils/tokenHelper");
const { genSalt, hash, compare } = require("bcrypt");
const saltRounds = 10;

// Login
router.post("/api/login", (req, res) => {
  const formattedEmail = req.body.email.toLowerCase();
  db.User.findOne({ email: formattedEmail })
    .populate("items")
    .populate("excursions")
    .then(userData => {
      compare(req.body.password, userData.password).then(result => {
        if (result) {
          const token = generateToken(userData._id);
          const userObject = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            items: userData.items,
            excursions: userData.excursions,
          };
          res.status(201).json({
            error: false,
            body: { userObject, token },
            message: "Successfully logged in.",
          });
        } else {
          throw err;
        }
      });
    })
    .catch(err => {
      res.status(401).json({
        error: true,
        body: null,
        message: "Incorrect login credentials.",
      });
    });
});

//Sign up
router.post("/api/signup", (req, res) => {
  const newUser = req.body;
  genSalt(saltRounds, (err, salt) => {
    hash(newUser.password, salt)
      .then(hash => {
        newUser.password = hash;
        db.User.create(newUser)
          .then(userData => {
            const token = generateToken(userData._id);
            const userObject = {
              firstName: userData.firstName,
              lastName: userData.lastName,
              items: userData.items,
              excursions: userData.excursions,
            };
            res.status(201).json({
              error: false,
              body: { userObject, token },
              message: "Successfully created account.",
            });
          })
          .catch(err => {
            res.status(400).json({
              error: true,
              body: null,
              message: "Unable to create account.",
            });
          });
      })
      .catch(err => {
        res.json("Error saving password to database.");
      });
  });
});

module.exports = router;

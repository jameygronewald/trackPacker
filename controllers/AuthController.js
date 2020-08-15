const express = require("express");
const router = express.Router();
const db = require("../models");
const { generateToken } = require('../client/src/utils/tokenHelper');

// Login
router.post("/api/login", (req, res) => {
    const formattedEmail = req.body.email.toLowerCase();
    db.User.findOne({ email: formattedEmail })
      .then(userData => {
        if (userData.password === req.body.password) {
            const token = generateToken(userData._id);
            res.status(200).json({
                error: false,
                data: token,
                message: "Successfully logged in."
            })
        } else {
            throw err
        }
      })
      .catch(err => {
        res.status(401).json({
          error: true,
          data: null,
          message: "Incorrect login credentials.",
        });
      });
  });

module.exports = router;
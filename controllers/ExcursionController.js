const express = require("express");
const router = express.Router();
const db = require("../models");
const { verifyToken } = require("../client/src/utils/tokenHelper");

// Find all excursions
router.get("/api/excursions/all", (req, res) => {
  db.Excursion.find({})
    .then(excursionData => {
      res.json({
        error: false,
        data: excursionData,
        message: "Successfully retrieved all excursion data.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error retrieving excursion data.",
      });
    });
});

router.get("/api/excursions", (req, res) => {
  try {
    verifyToken(req.headers.auth);
    let userId = verifyToken(req.headers.auth).data;
    db.User.findOne({ _id: userId })
      .populate("excursions")
      .then(userData => {
        console.log(userData);
        res.json({
          error: false,
          data: userData,
          message: "Successfully retrieved user's excursions.",
        });
      })
      .catch(err => {
        res.status(500).json({
          error: true,
          data: null,
          message: "Error retrieving user's excursions.",
        });
      });
  } catch (error) {
    console.error(error);
    res.status(401).redirect("/");
  }
});


// Find an excursion and populate existing excursions
router.get("/api/excursions/:id", (req, res) => {
  db.Excursion.findOne({ _id: req.params.id })
    .populate("items")
    .then(excursionData => {
      res.json({
        error: false,
        data: excursionData,
        message: "Successfully retrieved excursion data.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error retrieving excursion data.",
      });
    });
});

// Create new excursion
router.post("/api/excursions", (req, res) => {
  db.Excursion.create(req.body)
    .then(newExcursionData => {
      res.json({
        error: false,
        data: newExcursionData,
        message: "Successfully added new excursion.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error adding new excursion to database.",
      });
    });
});

router.put("/api/excursions/:id", (req, res) => {
  db.Excursion.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    useFindAndModify: false,
  })
    .then(excursionData => {
      res.json({
        error: false,
        data: excursionData,
        message: "Successfully updated excursion data.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error updating excursion data.",
      });
    });
});

// Delete an excursion
router.delete("/api/excursions/:id", (req, res) => {
  db.Excursion.deleteOne({ _id: req.params.id })
    .then(excursionData => {
      res.json({
        error: false,
        data: excursionData,
        message: "Successfully deleted excursion data.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error deleting excursion data.",
      });
    });
});

module.exports = router;

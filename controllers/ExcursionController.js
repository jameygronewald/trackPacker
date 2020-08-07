const express = require("express");
const router = express.Router();
const db = require("../models");

// Read all items
router.get("/api/excursions", (req, res) => {
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

module.exports = router;

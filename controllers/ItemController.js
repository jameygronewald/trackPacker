const express = require("express");
const router = express.Router();
const db = require("../models");

// Find all items
router.get("/api/items", (req, res) => {
  db.Item.find({})
    .then(itemData => {
      res.json({
        error: false,
        data: itemData,
        message: "Successfully retrieved all item data.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error retrieving item data.",
      });
    });
});

// Create new item
router.post("/api/items", (req, res) => {
  db.Item.create(req.body)
    .then(newItemData => {
      res.json({
        error: false,
        data: newItemData,
        message: "Successfully added new item.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error adding new item to database.",
      });
    });
});

module.exports = router;

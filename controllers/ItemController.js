const express = require("express");
const router = express.Router();
const db = require("../models");

// Find all items
router.get("/api/items", (req, res) => {
  db.Item.find({})
    .then((itemData) => {
      res.json({
        error: false,
        data: itemData,
        message: "Successfully retrieved all item data.",
      });
    })
    .catch((err) => {
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
    .then((newItemData) => {
      res.json({
        error: false,
        data: newItemData,
        message: "Successfully added new item.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error adding new item to database.",
      });
    });
});

router.put("/api/items/:id", (req, res) => {
  db.Excursion.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((itemData) => {
      res.json({
        error: false,
        data: itemData,
        message: "Successfully updated item data.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error retrieving item data.",
      });
    });
});

router.delete("/api/items/:id", (req, res) => {
  db.Excursion.deleteOne({ _id: req.params.id }, req.body)
    .then((itemData) => {
      res.json({
        error: false,
        data: itemData,
        message: "Successfully deleted item data.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error deleting item data.",
      });
    });
});

module.exports = router;

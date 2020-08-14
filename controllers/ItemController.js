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

router.post("/api/items/:id", (req, res) => {
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

// Update an item
router.put("/api/items", (req, res) => {
  db.Item.findOneAndUpdate({ _id: req.body._id }, req.body)
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

// Delete an item
router.delete("/api/items/:id", (req, res) => {
  db.Item.deleteOne({ _id: req.params.id })
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

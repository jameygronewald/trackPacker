const express = require("express");
const router = express.Router();
const db = require("../models");
const { verifyToken } = require("../client/src/utils/tokenHelper");

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
  try {
    verifyToken(req.headers.auth);
    let userId = verifyToken(req.headers.auth).data;
    db.Item.create(req.body).then(newItemData => {
      let newItemId = newItemData._id;
      db.User.findOne({ _id: userId }).then(data => {
        let userItems = data.items;
        userItems.push(newItemId);
        let userInventory = { items: userItems };
        db.User.findOneAndUpdate({ _id: userId }, userInventory, {
          new: true,
          useFindAndModify: false,
        })
        .populate("items")
        .populate("excursions")
          .then(updatedUser => {
            res.json({
              error: false,
              data: updatedUser,
              message: "Successfully added new item to inventory.",
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
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({
      error: true,
      data: null,
      message: "Invalid jwt",
    });
  }
});

// Update an item
router.put("/api/items", (req, res) => {
  db.Item.findOneAndUpdate({ _id: req.body._id }, req.body)
    .then(itemData => {
      res.json({
        error: false,
        data: itemData,
        message: "Successfully updated item data.",
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

// Delete an item
router.delete("/api/items/:id", (req, res) => {
  try {
    verifyToken(req.headers.auth);
    const userId = verifyToken(req.headers.auth).data;
    db.Item.findOneAndDelete({ _id: req.params.id })
      .then(itemData => {
        const deletedItem = itemData._id;
        db.User.findOne({ _id: userId }).then(userData => {
          const userInventory = userData.items;
          const newInventory = userInventory.filter(
            item => JSON.stringify(item) != JSON.stringify(deletedItem)
          );
          const updatedInventory = { items: newInventory };
          db.User.findOneAndUpdate({ _id: userId }, updatedInventory, {
            new: true,
            useFindAndModify: false,
          })
          .then(response => {
            console.log(response);
          });
        });
        res.json({
          error: false,
          data: itemData,
          message: "Successfully deleted item data.",
        });
      })
      .catch(err => {
        res.status(500).json({
          error: true,
          data: null,
          message: "Error deleting item data.",
        });
      });
  } catch (error) {
    console.error(error);
    res.status(401).json({
      error: true,
      data: null,
      message: "Invalid jwt",
    });
  }
});

module.exports = router;

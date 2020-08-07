const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Item name is required.",
  },
  status: {
    enum: [ "Inventory", "Wishlist"],
    description: "can only be one of the enum values and is required"
  },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
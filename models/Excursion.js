const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExcursionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Trip name is required.",
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const Excursion = mongoose.model("Excursion", ExcursionSchema);

module.exports = Excursion;
const mongoose = require("mongoose");

const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required.",
  },
  firstName: {
    type: String,
    trim: true,
    required: "First name is required.",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last name is required.",
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  excursions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Excursion",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

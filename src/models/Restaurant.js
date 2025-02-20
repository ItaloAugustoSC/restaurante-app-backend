const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  type: String,
  rating: { type: Number, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);

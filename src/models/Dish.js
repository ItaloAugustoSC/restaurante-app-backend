const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
  name: String,
  rating: { type: Number, default: 0 },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
});

module.exports = mongoose.model("Dish", DishSchema);

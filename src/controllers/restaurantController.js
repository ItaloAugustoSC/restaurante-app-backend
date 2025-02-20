const Restaurant = require("../models/Restaurant");

exports.createRestaurant = async (req, res) => {
  const { name, address, type } = req.body;
  const restaurant = new Restaurant({ name, address, type, user: req.user.id });
  await restaurant.save();
  res.json(restaurant);
};

exports.getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({ user: req.user.id });
  res.json(restaurants);
};

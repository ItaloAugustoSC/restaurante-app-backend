const express = require("express");
const { createRestaurant, getRestaurants } = require("../controllers/restaurantController");
const auth = require("../middleware/auth");

const router = express.Router();
router.post("/", auth, createRestaurant);
router.get("/", auth, getRestaurants);

module.exports = router;

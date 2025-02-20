const express = require("express");
const { createRestaurant, getRestaurants, deleteRestaurant, updateRestaurant } = require("../controllers/restaurantController");
const auth = require("../middleware/auth");

const router = express.Router();
router.post("/", auth, createRestaurant);
router.get("/", auth, getRestaurants);
router.delete("/:id", auth, deleteRestaurant);
router.put("/:id", auth, updateRestaurant);

module.exports = router;

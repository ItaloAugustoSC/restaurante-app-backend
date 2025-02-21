const express = require("express");
const {
  createDish,
  getDishes,
  getDishById,
  updateDish,
  deleteDish
} = require("../controllers/dishController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/dishes", auth, createDish);
router.get("/dishes", getDishes);
router.get("/dishes/:id", getDishById);
router.put("/dishes/:id", auth, updateDish);
router.delete("/dishes/:id", auth, deleteDish);

module.exports = router;
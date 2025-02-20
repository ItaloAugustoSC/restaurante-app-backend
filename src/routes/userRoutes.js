const express = require("express");
const { register, login, deleteUser } = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.delete("/:id", auth, deleteUser);

module.exports = router;

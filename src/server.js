const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const dishRoutes = require("./routes/dishRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/restaurants", restaurantRoutes, dishRoutes);

connectDB();
app.listen(process.env.PORT, () => console.log(`🔥 Servidor rodando na porta ${process.env.PORT}`));

const { Router } = require("express");
const mainRoute = Router();
const userRoutes = require("./userRoutes");

mainRoute.use("/user", userRoutes);

module.exports = mainRoute;

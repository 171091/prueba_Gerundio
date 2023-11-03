const { Router } = require("express");
const mainRoute = Router();
const fruitsRoutes = require("./fruitsRoutes/fruitsRoutes");
const vegetablesRoutes = require("./vegetablesRoutes/vegetablesRoutes");

mainRoute.use("/fruits", fruitsRoutes);
mainRoute.use("/vegetables", vegetablesRoutes);

module.exports = mainRoute;

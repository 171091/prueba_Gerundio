const { Router } = require("express");
const getvegetablesControllers = require("../../controllers/vegetablesControllers/getvegetablesControllers");
const postvegetablesControllers = require("../../controllers/vegetablesControllers/postvegetablesControllers");
const putvegetablesControllers = require("../../controllers/vegetablesControllers/putvegetablesControllers");
const deletevegetablesControllers = require("../../controllers/vegetablesControllers/deletevegetablesControllers");

const vegetablesRoutes = Router();

vegetablesRoutes.get("/", getvegetablesControllers);
vegetablesRoutes.post("/", postvegetablesControllers);
vegetablesRoutes.put("/", putvegetablesControllers);
vegetablesRoutes.delete("/", deletevegetablesControllers);

module.exports = vegetablesRoutes;

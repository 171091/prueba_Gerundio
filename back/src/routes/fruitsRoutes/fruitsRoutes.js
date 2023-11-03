const { Router } = require("express");
const getfruitsControllers = require("../../controllers/fruitsControllers/getfruitsControllers");
const postfruitsControllers = require("../../controllers/fruitsControllers/postfruitsControllers");
const putfruitsControllers = require("../../controllers/fruitsControllers/putfruitsControllers");
const deletefruitsControllers = require("../../controllers/fruitsControllers/deletefruitsControllers");

const fruitsRoutes = Router();

fruitsRoutes.get("/", getfruitsControllers);
fruitsRoutes.post("/", postfruitsControllers);
fruitsRoutes.put("/", putfruitsControllers);
fruitsRoutes.delete("/", deletefruitsControllers);

module.exports = fruitsRoutes;

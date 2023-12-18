const { Router } = require("express");
const getUserControllers = require("../controllers/getUserControllers");
const postUserControllers = require("../controllers/postUserControllers");
const putUserControllers = require("../controllers/putUserControllers");
const deleteUserControllers = require("../controllers/deleteUserControllers");

const userRoutes = Router();

userRoutes.get("/", getUserControllers);
userRoutes.post("/", postUserControllers);
userRoutes.put("/", putUserControllers);
userRoutes.delete("/", deleteUserControllers);

module.exports = userRoutes;

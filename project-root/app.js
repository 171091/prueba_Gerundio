const express = require("express");
const app = express();
const mainRoute = require("./src/routes/routesIndex");

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", mainRoute);

module.exports = app;

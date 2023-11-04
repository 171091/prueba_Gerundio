require("dotenv").config();
const { DB_PORT, DB_HOST } = process.env;
//const connectionString = `mongodb://${DB_HOST}:${DB_PORT}`;
const connectionString = `mongodb://localhost:27017/`;

const mongoose = require("mongoose");

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;

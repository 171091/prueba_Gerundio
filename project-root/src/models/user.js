const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    default: 0,
  },

  email: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("User", userSchema);

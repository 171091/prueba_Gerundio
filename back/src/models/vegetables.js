const mongoose = require("mongoose");
const { Schema } = mongoose;

const vegetablesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sku: {
    type: Number,
    default: 0,
  },

  is_seasonal: {
    type: Boolean,
    required: true,
    default: true,
  },

  media: {
    images: [
      {
        imageName: String,
        imageUrl: String,
      },
    ],
  },

  quantity: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    enum: ["vegetales", "frutas"],
    required: true,
  },
});

module.exports = mongoose.model("Vegetables", vegetablesSchema);

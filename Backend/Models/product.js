const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
  type: String,
  required: true
 },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  quantity: {             
      type: Number,
      required: true,
      default: 1,
    },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
}, { timestamps: true });

const Product = mongoose.model("product", productSchema);

module.exports = Product;
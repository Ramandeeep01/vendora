const Product = require("../Models/product");

async function addProductController(req, res) {
  try {

    if (!req.user) {
      return res.status(401).json({ message: "Not logged in" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image not uploaded" });
    }

    const { name, image, price, description, quantity } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
      quantity, 
      seller: req.user._id,
      image: req.file?.path || req.file?.url,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await Product.find()
    .populate("seller", "fullName");
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getMyProducts(req, res) {
  try {
    const products = await Product.find({
        seller: req.user._id,
    }).populate("seller", "fullName");
    res.status(200).json(products);
    } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { addProductController, getMyProducts, getAllProducts };
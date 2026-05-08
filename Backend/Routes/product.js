const express = require("express");
const router = express.Router();

const Product = require("../Models/product");

const { addProductController, getMyProducts, getAllProducts } = require("../Controllers/product");  
const { restrictTo } = require("../Middlewares/user");
const upload = require("../Middlewares/upload");

router.post("/add-product", restrictTo("seller"), upload.single("image"), addProductController);
router.get("/my-products", restrictTo("seller"), getMyProducts);
router.get("/all-products", getAllProducts);

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate("seller", "fullName");
  
  res.json(product);
});

router.delete("/delete/:id", restrictTo("seller"), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    // ❗ security check (very important)
    if (product.seller.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Product deleted ✅" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;
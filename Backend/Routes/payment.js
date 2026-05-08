const express = require("express");
const router = express.Router();
const { createOrder } = require("../Controllers/payment");

router.post("/create-order", createOrder);

module.exports = router;
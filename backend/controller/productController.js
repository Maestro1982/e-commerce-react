const Product = require('../models/productModel.js');
const asyncHandler = require('express-async-handler');

// Create a new Product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = { createProduct };

const Category = require('../models/productCategoryModel.js');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongoDbId.js');

// Create a new product category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Update a product category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete a product category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get a single category
const getSingleCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const singleCategory = await Category.findById(id);
    res.json(singleCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all categories
const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const allCategory = await Category.find();
    res.json(allCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getSingleCategory,
  getAllCategory,
};

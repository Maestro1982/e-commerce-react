const Brand = require('../models/brandModel.js');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongoDbId.js');

// Create a new brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Update a brand
const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete a brand
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    res.json(deletedBrand);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get a single brand
const getSingleBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const singleBrand = await Brand.findById(id);
    res.json(singleBrand);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all brands
const getAllBrands = asyncHandler(async (req, res) => {
  try {
    const allBrands = await Brand.find();
    res.json(allBrands);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getSingleBrand,
  getAllBrands,
};

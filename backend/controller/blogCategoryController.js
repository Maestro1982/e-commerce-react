const BlogCategory = require('../models/BlogCategoryModel.js');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongoDbId.js');

// Create a new blog category
const createBlogCategory = asyncHandler(async (req, res) => {
  try {
    const newBlogCategory = await BlogCategory.create(req.body);
    res.json(newBlogCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Update a blog category
const updateBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedBlogCategory = await BlogCategory.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedBlogCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete a blog category
const deleteBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBlogCategory = await BlogCategory.findByIdAndDelete(id);
    res.json(deletedBlogCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get a single blogcategory
const getSingleBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const singleBlogCategory = await BlogCategory.findById(id);
    res.json(singleBlogCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all blogcategories
const getAllBlogCategory = asyncHandler(async (req, res) => {
  try {
    const allBlogCategory = await BlogCategory.find();
    res.json(allBlogCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
  getSingleBlogCategory,
  getAllBlogCategory,
};

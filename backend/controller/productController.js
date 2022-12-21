const Product = require('../models/productModel.js');
const User = require('../models/userModel.js');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');

// Create a new Product
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Update a product
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateTheProduct = await Product.findOneAndUpdate({ id }, req.body, {
      new: true,
    });
    res.json(updateTheProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params;
  try {
    const deleteTheProduct = await Product.findOneAndDelete(id);
    res.json(deleteTheProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get a single product
const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all products
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((element) => delete queryObj[element]);
    console.log(queryObj);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // Limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error('This page does not exists');
    }
    console.log(page, limit, skip);

    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Add product to wish list
const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyAddedToWishlist = user.wishlist.find(
      (id) => id.toString() === productId
    );

    if (alreadyAddedToWishlist) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: productId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: productId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

// Give a rating to a product
const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, productId, comment } = req.body;

  try {
    const product = await Product.findById(productId);

    let alreadyRated = product.ratings.find(
      (userId) => userId.postedBy.toString() === _id.toString()
    );

    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { 'ratings.$.star': star, 'ratings.$.comment': comment },
        },
        {
          new: true,
        }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        productId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedBy: _id,
            },
          },
        },
        { new: true }
      );
    }

    const getAllRatings = await Product.findById(productId);
    let totalratingCount = getAllRatings.ratings.length;
    let sumOfRatings = getAllRatings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(sumOfRatings / totalratingCount);
    let finalProduct = await Product.findByIdAndUpdate(
      productId,
      {
        totalrating: actualRating,
      },
      { new: true }
    );
    res.json(finalProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
};

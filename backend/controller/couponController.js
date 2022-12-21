const Coupon = require('../models/couponModel.js');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongoDbId.js');

// Create a new coupon
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all coupons
const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const getAllCoupons = await Coupon.find();
    res.json(getAllCoupons);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Update a coupon
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCoupon);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete the coupon
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deletedCoupon);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = { createCoupon, getAllCoupons, updateCoupon, deleteCoupon };

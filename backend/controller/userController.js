const User = require('../models/userModel.js');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');
const validateMongoDbId = require('../utils/validateMongoDbId.js');

// Create a new user
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // Create a new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    // User already exists
    throw new Error(`User ${req.body.email} already exists`);
  }
});

// Login a user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check if the user already exists or not
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordEqualMatch(password))) {
    res.json({
      _id: findUser?._id,
      name: findUser?.name,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error('Invalid credentials');
  }
});

// Update a user
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    const updateSingleUser = await User.findOneAndUpdate(
      id,
      {
        name: req?.body?.name,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updateSingleUser);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all users
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get a single user
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getSingleUser = await User.findById(id);
    res.json({
      getSingleUser,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete a user
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteSingleUser = await User.findByIdAndDelete(id);
    res.json({
      deleteSingleUser,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

// Block a user
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const blockTheUser = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json(blockTheUser);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Unblock a user
const unBlockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const unBlockTheUser = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json(unBlockTheUser);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getAllUsers,
  getUser,
  deleteUser,
  blockUser,
  unBlockUser,
};

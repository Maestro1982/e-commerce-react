const User = require('../models/userModel.js');
const Product = require('../models/productModel.js');
const Cart = require('../models/cartModel.js');
const Coupon = require('../models/couponModel.js');
const Order = require('../models/orderModel.js');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');
const { generateRefreshToken } = require('../config/refreshToken');
const validateMongoDbId = require('../utils/validateMongoDbId.js');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('./emailController.js');
const { v4: uuidv4 } = require('uuid');

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
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateUser = await User.findByIdAndUpdate(
      findUser?.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
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

// Login admin
const loginAdminUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check if the user already exists or not
  const findAdmin = await User.findOne({ email });
  if (findAdmin.role !== 'admin')
    throw new Error(`User ${findAdmin.email} is not authorized`);
  if (findAdmin && (await findAdmin.isPasswordEqualMatch(password))) {
    const refreshToken = await generateRefreshToken(findAdmin?._id);
    const updateUser = await User.findByIdAndUpdate(
      findAdmin?.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin?._id,
      name: findAdmin?.name,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateToken(findAdmin?._id),
    });
  } else {
    throw new Error('Invalid credentials');
  }
});

// Handle refreshToken
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;

  if (!cookie?.refreshToken)
    throw new Error('Refresh token missing in cookies');

  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });

  if (!user)
    throw new Error(
      'There is no refresh token present in database or it does not match'
    );
  jwt.verify(refreshToken, process.env.JWT_SECRET, (error, decoded) => {
    if (error || user?.id !== decoded.id) {
      throw new Error('There is something wrong with the refresh token');
    }
    const accessToken = generateToken(user?._id);
    res.json(accessToken);
  });
});

// Logout the user
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;

  if (!cookie?.refreshToken)
    throw new Error('Refresh token missing in cookies');

  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });

  if (!user) {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // Forbidden
  }
  await User.findOneAndUpdate(refreshToken, {
    refreshToken: '',
  });
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204); // Forbidden
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

// Save the user address
const saveUserAddress = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const updateSingleUser = await User.findOneAndUpdate(
      _id,
      {
        address: req?.body?.address,
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

// Update password
const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoDbId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

// Forgot Password
const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found with this email');
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: 'Hey User',
      subject: 'Forgot Password Link',
      htm: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Reset password
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error(' Token Expired, Please try again later');
  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  res.json(user);
});

// Get the user wishlist
const getWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const findUser = await User.findById(_id).populate('wishlist');
    res.json(findUser);
  } catch (error) {
    throw new Error(error.message);
  }
});

// User cart
const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    let products = [];
    const user = await User.findById(_id);
    // Check if the user already have products in the cart
    const alreadyCartExists = await Cart.findOne({ orderBy: user._id });
    if (alreadyCartExists) {
      alreadyCartExists.remove();
    }
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      let getPrice = await Product.findById(cart[i]._id).select('price').exec();
      object.price = getPrice.price;
      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    let newCart = await new Cart({
      products,
      cartTotal,
      orderBy: user?._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get the user cart
const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const cart = await Cart.findOne({ orderBy: _id }).populate(
      'products.product'
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Empty the cart
const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.findOneAndRemove({ orderBy: user._id });
    res.json(cart);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Use a coupon
const useCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);

  const validCoupon = await Coupon.findOne({ name: coupon });
  if (validCoupon === null) {
    throw new Error('Invalid coupon');
  }
  const user = await User.findOne({ _id });
  let { products, cartTotal } = await Cart.findOne({
    orderBy: user._id,
  }).populate('products.product');
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2);
  await Cart.findOneAndUpdate(
    { orderBy: user._id },
    { totalAfterDiscount },
    { new: true }
  );
  res.json(totalAfterDiscount);
});

// Create an order
const createOrder = asyncHandler(async (req, res) => {
  const { COD, useCoupon } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    if (!COD) throw new Error('Cash on delivery failed');
    const user = await User.findById(_id);
    let userCart = await Cart.findOne({ orderBy: user._id });
    let totalAmount = 0;

    if (useCoupon && userCart.totalAfterDiscount) {
      totalAmount = userCart.totalAfterDiscount;
    } else {
      totalAmount = userCart.cartTotal;
    }
    let newOrder = await new Order({
      products: userCart.products,
      paymentIntent: {
        id: uuidv4(),
        method: 'COD',
        amount: totalAmount,
        status: 'Cash on delivery',
        createdAt: Date.now(),
        currency: 'euro',
      },
      orderBy: user._id,
      orderStatus: 'Cash on delivery',
    }).save();
    let update = userCart.products.map((product) => {
      return {
        updateOne: {
          filter: { _id: product.product._id },
          update: { $inc: { quantity: -product.count, sold: +product.count } },
        },
      };
    });
    const updated = await Product.bulkWrite(update, {});
    res.json({ message: 'Success' });
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all orders
const getAllOrders = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const userOrders = await Order.findOne({ orderBy: _id })
      .populate('products.product')
      .exec();
    res.json(userOrders);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Update orderstatus
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateOrderStatus = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { next: true }
    );
    res.json(updateOrderStatus);
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
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdminUser,
  getWishlist,
  saveUserAddress,
  userCart,
  getUserCart,
  emptyCart,
  useCoupon,
  createOrder,
  getAllOrders,
  updateOrderStatus,
};

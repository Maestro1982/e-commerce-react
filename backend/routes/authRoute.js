const express = require('express');
const {
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
} = require('../controller/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.put('/password', authMiddleware, updatePassword);
router.post('/login', loginUser);
router.post('/admin-login', loginAdminUser);
router.post('/cart', authMiddleware, userCart);
router.post('/cart/use-coupon', authMiddleware, useCoupon);
router.post('/cart/cash-order', authMiddleware, createOrder);
router.get('/cart', authMiddleware, getUserCart);
router.delete('/empty-cart', authMiddleware, emptyCart);
router.get('/all-users', authMiddleware, isAdmin, getAllUsers);
router.get('/get-orders', authMiddleware, getAllOrders);
router.get('/refresh-token', handleRefreshToken);
router.get('/logout', logout);
router.get('/wishlist', authMiddleware, getWishlist);
router.get('/:id', authMiddleware, isAdmin, getUser);
router.delete('/:id', deleteUser);
router.put('/edit-user', authMiddleware, updateUser);
router.put('/save-address', authMiddleware, saveUserAddress);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unBlockUser);
router.put(
  '/order/update-order/:id',
  authMiddleware,
  isAdmin,
  updateOrderStatus
);

module.exports = router;

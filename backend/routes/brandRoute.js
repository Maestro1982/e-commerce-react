const express = require('express');
const {
  createBrand,
  updateBrand,
  getAllBrands,
  deleteBrand,
  getSingleBrand,
} = require('../controller/brandController');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createBrand);
router.put('/:id', authMiddleware, isAdmin, updateBrand);
router.delete('/:id', authMiddleware, isAdmin, deleteBrand);
router.get('/:id', getSingleBrand);
router.get('/', getAllBrands);

module.exports = router;

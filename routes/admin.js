const express = require('express')
const router = express.Router()
const path = require('path')
const adminController = require('../controllers/admin')


router.get('/add-product',adminController.getProducts);

router.post('/add-product',adminController.postProducts);

router.get('/products', adminController.listProducts);

module.exports = router
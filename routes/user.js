const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shop');

router.get('/',shopController.listProduct)
router.get('/cart', shopController.cartProduct);
router.get('/orders', shopController.ordersProduct);
router.get('/products', shopController.getProducts);
router.get('/checkout', shopController.checkoutProduct);

module.exports = router;
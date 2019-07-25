const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('user/index', {prods:products, pageTitle:'Index', path:'/'});
    });
}

exports.cartProduct = (req, res, next) => {
    res.render('user/cart', {pageTitle:'Cart Shopping', path:'/cart'});
}

exports.ordersProduct = (req, res, next) => {
    res.render('user/orders', {pageTitle:'Orders Page', path:'/orders'})
}

exports.listProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('user/product-list', {prods:products, pageTitle:'Shopping Pug', path:'/'});
    });
}

exports.checkoutProduct = (req, res, next) => {
    res.render('user/checkout', {pageTitle:'Checkout Page', path:'/checkout'})
}
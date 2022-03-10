const router = require('express').Router();

const Product = require('../models/Product');
const catchAsync = require('../utilities/catchAsync');
const { verifyTokenAndAdmin } = require('../utilities/verifyToken');

router.get('/:id', catchAsync(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
}));

router.get('/', catchAsync(async (req, res) => {
    const products = req.query.new
        ? await Product.find().sort({ createdAt: -1 }).limit(1)
        : req.query.category
            ? await Product.find({ categories: { $in: [req.query.category] } })
            : await Product.find();
    res.status(200).json(products);
}));

router.post('/admin/add', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(200).json(newProduct);
}));

router.put('/admin/update/:id', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true });
    res.status(200).json(product);
}));

router.delete('/admin/:id', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('Product has been deleted.');
}));

module.exports = router
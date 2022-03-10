const router = require('express').Router();

const Cart = require('../models/Cart');
const catchAsync = require('../utilities/catchAsync');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utilities/verifyToken');

router.get('/:userId', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
}));

router.get('/admin/usercarts', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const carts = await Cart.find();
    res.status(200).json(carts);
}));

router.post('/add', verifyToken, catchAsync(async (req, res) => {
    const cart = new Cart(req.body);
    const newCart = await cart.save();
    res.status(200).json(newCart);
}));

router.put('/update/:id', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const cart = await Cart.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true });
    res.status(200).json(cart);
}));

router.delete('/:id', verifyTokenAndAuth, catchAsync(async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart has been deleted!');
}));

module.exports = router
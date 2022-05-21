const router = require('express').Router();

const Order = require('../models/Order');
const User = require('../models/User');
const catchAsync = require('../utilities/catchAsync');
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utilities/verifyToken');

router.post('/new', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const order = new Order(req.body);
    const user = await User.findById(req.body.userId);
    order.customer = user;
    user.orders.push(order);
    await user.save();
    const newOrder = await order.save();
    res.status(200).json(newOrder);
}));

router.get('/admin/userorders', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const orders = await Order.find().populate('customer');
    res.status(200).json(orders);
}));

router.put('/admin/edit/:id', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true });
    res.status(200).json(order);
}));

router.delete('/admin/:id', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been canceled!');
}));

router.get('/:userId', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
}));

router.get('/admin/income', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const id = req.query.id;
    const date = new Date();
    const endMonth = new Date(date.setMonth(date.getMonth() - 1));
    const startMonth = new Date(new Date().setMonth(endMonth.getMonth() - 1));
    const income = await Order.aggregate([
        {
            $match: {
                createdAt: { $gte: startMonth },
                ...(id && {
                    products: { $elemMatch: { productId: id } }
                })
            }
        },
        {
            $project: {
                month: { $month: '$createdAt' },
                sales: '$amount'
            }
        },
        {
            $group: {
                _id: '$month',
                total: { $sum: '$sales' }
            }
        }
    ]);
    res.status(200).json(income);
}));

module.exports = router
const router = require('express').Router();

const Order = require('../models/Order');
const catchAsync = require('../utilities/catchAsync');
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utilities/verifyToken');

router.post('/new', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const order = new Order(req.body);
    const newOrder = await order.save();
    res.status(200).json(newOrder);
}));

router.get('/admin/userorders', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders);
}));

router.put('/admin/edit/:id', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true });
    res.status(200).json(order);
}));

router.get('/admin/income', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const date = new Date();
    const endMonth = new Date(date.setMonth(date.getMonth() - 1));
    const startMonth = new Date(new Date().setMonth(endMonth.getMonth() - 1));
    const income = await Order.aggregate([
        {
            $match: {
                createdAt: { $gte: startMonth }
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

router.delete('/admin/:id', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been deleted!');
}));

router.get('/:userId', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
}));

module.exports = router
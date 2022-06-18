const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const Order = require('../models/Order');
const Product = require('../models/Product');
const { AuthenticationError } = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utilities/verifyToken');

router.post('/new/:id', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    if (session.client_reference_id !== req.user.id) {
        throw new AuthenticationError('Access denied! Unauthorised user.', 403);
    } else if (!session || session.payment_status !== 'paid') {
        throw new AuthenticationError('Payment unconfirmed!', 401);
    } else if (await Order.findOne({ paymentId: session.payment_intent })) {
        throw new Error('Duplicate Error!');
    }

    const newOrder = new Order({
        ...req.body,
        userId: session.client_reference_id,
        name: session.customer_details.name,
        paymentId: session.payment_intent,
        address: session.customer_details.address,
        total: session.amount_total / 100
    });
    const order = await newOrder.save();

    for (let p of req.body.products) {
        const product = await Product.findById(p._id);
        product.countInStock -= p.qty;
        await product.save();
    }
    res.status(200).json(order);
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

router.delete('/admin/:id', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been canceled!');
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

router.get('/:id', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const orders = await Order.find({ userId: req.params.id }).lean();
    if (!orders.length) {
        throw new Error('No orders found for this user!');
    } else {
        orders.forEach(e => {
            if (e.userId !== req.user.id)
                throw new AuthenticationError('Access denied! Unauthorised user.', 403);
        });
    }
    res.status(200).json(orders);
}));

router.get('/:id/:orderId', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const order = await Order.findById(req.params.orderId);
    if (order.userId !== req.user.id)
        throw new AuthenticationError('Access denied! Unauthorised user.', 403);
    res.status(200).json(order);
}));

module.exports = router
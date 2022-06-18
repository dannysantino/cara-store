const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const User = require('../models/User');
const catchAsync = require('../utilities/catchAsync');
const { verifyTokenAndAuth } = require('../utilities/verifyToken');

router.post('/session/:id', verifyTokenAndAuth, catchAsync(async (req, res) => {
    let { products, user: { name, email, customerId } } = req.body;

    if (!customerId) {
        const { id } = await stripe.customers.create({ name, email });
        await User.findByIdAndUpdate(req.params.id, { $set: { customerId: id } });
        customerId = id;
    }

    const session = await stripe.checkout.sessions.create({
        line_items: products.map(e => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: e.name,
                    images: [e.img]
                },
                unit_amount: e.price * 100
            },
            quantity: e.qty
        })),
        customer: customerId,
        customer_update: {
            address: 'auto',
            shipping: 'auto'
        },
        client_reference_id: req.params.id,
        payment_intent_data: {
            setup_future_usage: 'on_session'
        },
        shipping_address_collection: {
            allowed_countries: ['US', 'CA']
        },
        shipping_options: [
            {
                shipping_rate: process.env.STRIPE_SHIPPING_ID
            }
        ],
        mode: 'payment',
        success_url: `${process.env.CLIENT_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_DOMAIN}/cart`
    });
    res.status(200).json({ customerId, url: session.url });
}));

module.exports = router
const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/pay', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (err, data) => {
        if (err) throw new Error(err);
        res.status(200).json(data);
    });
});

module.exports = router
const CryptoJS = require('crypto-js');

const User = require('../models/User');
const catchAsync = require('../utilities/catchAsync');
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utilities/verifyToken');

const router = require('express').Router();

router.get('/admin/:id', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const user = await User.findById(req.params.id);
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
}));

router.get('/admin/useraccounts', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const users = req.query.new
        ? await User.find().sort({ _id: -1 }).limit(1)
        : await User.find();
    res.status(200).json(users);
}));

router.get('/admin/stats', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    const data = await User.aggregate([
        {
            $match: {
                createdAt: { $gte: lastYear }
            }
        },
        {
            $project: {
                month: { $month: '$createdAt' }
            }
        },
        {
            $group: {
                _id: '$month',
                total: { $sum: 1 }
            }
        }
    ]);
    res.status(200).json(data);
}));

router.put('/update/:id', verifyTokenAndAuth, catchAsync(async (req, res) => {
    const { password: userPassword } = req.body;
    userPassword && (req.body.password = CryptoJS.AES.encrypt(userPassword, process.env.CRYPTO_JS_SECRET).toString());
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {
        $set: req.body
    }, { new: true });
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
}));

router.delete('/:id', verifyTokenAndAuth, catchAsync(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User account deleted.');
}));

module.exports = router
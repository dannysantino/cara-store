const router = require('express').Router();
const CryptoJS = require('crypto-js');
const multer = require('multer');

const User = require('../models/User');
const catchAsync = require('../utilities/catchAsync');
const { userStorage } = require('../cloudinary');
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utilities/verifyToken');

const upload = multer({ storage: userStorage });

router.get('/admin/useraccounts', catchAsync(async (req, res) => {
    const users = req.query.new
        ? await User.find().lean().sort({ _id: -1 }).limit(5)
        : await User.find().lean();
    users.forEach(e => delete e.password);
    res.status(200).json(users);
}));

router.get('/admin/stats', catchAsync(async (req, res) => {
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

router.post('/admin/add', verifyTokenAndAdmin, catchAsync(async (req, res) => {
    const user = new User(req.body);
    const newUser = await user.save();
    res.status(200).json(newUser);
}));

router.get('/admin/:id', catchAsync(async (req, res) => {
    const user = await User.findById(req.params.id);
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
}));

router.put('/update/:id', verifyTokenAndAuth, upload.single('img'), catchAsync(async (req, res) => {
    req.body.password && (req.body.password = CryptoJS.AES.encrypt(
        req.body.password, process.env.CRYPTO_JS_SECRET
    ).toString());

    req.file && (req.body.img = req.file.path);
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
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
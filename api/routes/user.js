const CryptoJS = require('crypto-js');

const User = require('../models/User');
const { verifyTokenAndAuth } = require('../utilities/verifyToken');
const catchAsync = require('../utilities/catchAsync');

const router = require('express').Router();

router.put('/:id', verifyTokenAndAuth, catchAsync(
    async (req, res) => {
        const { userPassword } = req.body;
        userPassword && (req.body.password = CryptoJS.AES.encrypt(userPassword, process.env.CRYPTO_JS_SECRET).toString());
        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            $set: req.body
        }, { new: true });
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    }
))

module.exports = router
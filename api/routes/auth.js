const router = require('express').Router();
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const catchAsync = require('../utilities/catchAsync');
const { UserInputError } = require('../utilities/appError');

const generateToken = user => {
    return jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET_KEY, { expiresIn: '5h' });
}

router.post('/register', catchAsync(async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({
        username,
        email,
        password: CryptoJS.AES.encrypt(password, process.env.CRYPTO_JS_SECRET).toString()
    });
    const user = await newUser.save();
    res.status(201).json(user);
}));

router.post('/login', catchAsync(async (req, res) => {
    const { username, password: inputPassword } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        throw new UserInputError('Invalid login credentials', 401);
    } else {
        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_JS_SECRET).toString(CryptoJS.enc.Utf8);
        if (decrypted !== inputPassword) throw new UserInputError('Invalid login credentials', 401);
        const { password, ...rest } = user._doc;
        res.status(200).json({
            ...rest,
            token: generateToken(user)
        });
    }
}));

module.exports = router;
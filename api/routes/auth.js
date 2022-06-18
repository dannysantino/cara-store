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
    const { name, username, email, password, phone } = req.body;
    if (await User.findOne({ username })) {
        throw new UserInputError('Username already taken. Please select another one...', 409);
    } else if (await User.findOne({ email })) {
        throw new UserInputError('Only one account allowed per email.', 409);
    }
    const newUser = new User({
        name,
        username,
        email,
        password: CryptoJS.AES.encrypt(password, process.env.CRYPTO_JS_SECRET).toString(),
        phone
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
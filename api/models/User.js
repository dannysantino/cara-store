const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        unique: true,
        default: null
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    img: {
        type: String,
        default: 'https://res.cloudinary.com/dbqnojxhy/image/upload/v1650567303/Projects/Cara%20Store/users/user_default.png'
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    birthday: {
        type: String
    },
    role: {
        type: String,
        default: 'Customer'
    }
}, { timestamps: true });

module.exports = model('User', userSchema);
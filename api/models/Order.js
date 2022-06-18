const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    products: [{
        _id: {
            id: false,
            type: String
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            required: true,
            default: 1
        }
    }]
}, { timestamps: true });

module.exports = model('Order', orderSchema);
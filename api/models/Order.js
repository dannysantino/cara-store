const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        _id: {
            id: false
        },
        productId: {
            type: String
        },
        name: {
            type: String
        },
        price: {
            type: Number
        },
        img: {
            type: String
        },
        size: {
            type: String
        },
        color: {
            String
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
}, { timestamps: true });

module.exports = model('Order', orderSchema);
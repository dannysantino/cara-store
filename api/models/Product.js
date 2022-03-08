const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
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
    categories: {
        type: Array
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    countInStock: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = model('Product', productSchema);
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database successfully connected'))
    .catch(e => console.error('Error connecting to database', e));

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
    next();
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.all('*', (req, res, next) => {
    next(new Error('Page not found', 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500, message = 'An error has been encountered' } = err;
    res.status(statusCode).json(message);
});

app.listen(process.env.PORT || 5000, () => {
    console.log('Express server running');
});
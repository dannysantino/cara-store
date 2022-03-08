require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoute = require('./routes/user');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database successfully connected'))
    .catch(e => console.error('Error connecting to database', e));

app.use(express.json());

app.use('/api/users', userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Express server running');
});
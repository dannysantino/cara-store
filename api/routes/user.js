const router = require('express').Router();

router.get('/endpoint', (req, res) => {
    res.send('User api endpoint reached!');
});

router.post('/post', (req, res) => {
    const username = req.body.username;
    res.send('Your username is ' + username);
});

module.exports = router
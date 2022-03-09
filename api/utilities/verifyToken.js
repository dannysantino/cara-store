const jwt = require('jsonwebtoken');

const { AuthenticationError } = require('../utilities/appError');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split('Bearer ')[1];
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
                if (err) throw new AuthenticationError('Invalid/Expired token', 401);
                req.user = user;
                next();
            });
        } else {
            throw new AuthenticationError('Authentication token must be in the format: Bearer [token]', 401);
        }
    } else {
        throw new AuthenticationError('Authorisation Header must be provided', 401);
    }
}

const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.params.id === req.user.id || req.user.isAdmin) {
            next();
        } else {
            throw new AuthenticationError('Action Unauthorised', 403);
        }
    });
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            throw new AuthenticationError('Action Unauthorised', 403);
        }
    });
}

module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin }
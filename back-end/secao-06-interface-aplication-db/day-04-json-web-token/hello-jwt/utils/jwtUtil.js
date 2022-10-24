require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = ({ username, admin = false }) => {
    const token = jwt.sign({ username, admin }, process.env.JWT_SECRET, {
        expiresIn: '1h',
        algorithm: 'HS256',
    });
    return token;
};

const validateToken = (token) => {
    const result = jwt.verify(token, process.env.JWT_SECRET);
    return result;
};

module.exports = {
    generateToken,
    validateToken,
};
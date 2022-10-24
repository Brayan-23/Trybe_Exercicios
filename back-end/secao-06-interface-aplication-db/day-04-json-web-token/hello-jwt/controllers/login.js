const createToken = require('../utils/jwtUtil');

const postLogin = (req, res) => {
    const corpo = req.body;

    if (corpo.username === 'admin' && corpo.password === 's3nh4S3gur4???') {
        corpo.admin = true;
        const token = createToken.generateToken(corpo);
    
        return res.status(200).json({ nada: token });
    }
    const token = createToken.generateToken(corpo);
    
        return res.status(200).json({ token });
};

module.exports = postLogin;
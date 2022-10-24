const Joi = require('joi');

const loginMiddleware = (req, res, next) => {
    const corpo = req.body;
    const schema = Joi.object({
        username: Joi.string().min(5).alphanum().required()
.messages({
            'string.min': '"username" length must be 5 characters long',
            'string.required': '"username" is required', 
        }),
        password: Joi.string().min(5).required().messages({
            'string.min': '"password" length must be 5 characters long',
            'string.required': '"password" is required',
        }),
    });
    const { error } = schema.validate(corpo);
    return next(error);
};

module.exports = loginMiddleware;
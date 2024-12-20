const Joi = require("joi");
const responseHandler = require("../responseHandler");

// Validation schema for creating a user
const loginValidation = Joi.object({
  username: Joi.string().max(34).required(), // Username must be a string, 6-34 characters, and is required
  password: Joi.string().min(8).max(18).required(), // Password must be 8-18 characters long and is required
});

const Login = async (req, res, next) => {
  try {
    await loginValidation.validateAsync(req.body);
    next();
  } catch (error) {
    console.log(error);
    return responseHandler(res, { error: error });
  }
};

module.exports = { Login };

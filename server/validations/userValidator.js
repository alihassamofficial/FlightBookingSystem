const Joi = require("joi");
const responseHandler = require("../responseHandler");

// Validation schema for creating a user
const createUserValidation = Joi.object({
  name: Joi.string().min(3).max(34).required(), // Name must be a string, 3-34 characters, and is required
  username: Joi.string().min(6).max(34).required(), // Username must be a string, 6-34 characters, and is required
  email: Joi.string().email().required(), // Email must be a valid email format and is required
  password: Joi.string().min(8).max(18).required(), // Password must be 8-18 characters long and is required
});

// Validation schema for get a user
const getUserValidation = Joi.object({
  userId: Joi.string().max(64).required(), // Username must be a string, 6-34 characters, and is required
  username: Joi.string().max(64).required(), // Username must be a string, 6-34 characters, and is required
});

// Validation schema for updating a user
const updateUserValidation = Joi.object({
  name: Joi.string().min(3).max(34).required(), // Name must be a string, 3-34 characters, and is required
  username: Joi.string().min(6).max(34).required(), // Username must be a string, 6-34 characters, and is required
  email: Joi.string().email().required(), // Email must be a valid email format and is required
});

// Validation schema for removing a user
const removeUserValidation = Joi.object({
  username: Joi.string().min(6).max(34).required(), // Username must be a string, 6-34 characters, and is required
});

// Middleware function to validate create user requests
const createUser = async (req, res, next) => {
  try {
    // Validate the request body against the createUserValidation schema
    await createUserValidation.validateAsync(req.body);
    next(); // If validation passes, proceed to the next middleware or route handler
  } catch (error) {
    console.log(error);
    // Send a response with validation error details if validation fails
    return responseHandler(res, { error: error.message });
  }
};

// Middleware function to validate create user requests
const getUser = async (req, res, next) => {
  try {
    // Validate the request body against the createUserValidation schema
    await getUserValidation.validateAsync(req.query);
    next(); // If validation passes, proceed to the next middleware or route handler
  } catch (error) {
    console.log(error);
    // Send a response with validation error details if validation fails
    return responseHandler(res, { error: error.message });
  }
};

// Middleware function to validate update user requests
const updateUser = async (req, res, next) => {
  try {
    // Validate the request body against the updateUserValidation schema
    await updateUserValidation.validateAsync(req.body);
    next(); // If validation passes, proceed to the next middleware or route handler
  } catch (error) {
    // Send a response with validation error details if validation fails
    return responseHandler(res, { error: error.message });
  }
};

// Middleware function to validate remove user requests
const removeUser = async (req, res, next) => {
  try {
    // Validate the request query parameters against the removeUserValidation schema
    await removeUserValidation.validateAsync(req.query);
    next(); // If validation passes, proceed to the next middleware or route handler
  } catch (error) {
    // Send a response with validation error details if validation fails
    return responseHandler(res, { error: error.message });
  }
};

// Export the validation middleware functions for use in routes
module.exports = { createUser, getUser, updateUser, removeUser };

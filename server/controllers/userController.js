const {
  createUser,
  getAllUser,
  getUser,
} = require("../database/models/userModel");
const responseHandler = require("../responseHandler");

// Controller function to handle creating a user
const create = async (req, res) => {
  console.log(req.body);
  try {
    // Check if the username already exists
    const existingUsernameUser = await getUser({ username: req.body.username });
    if (existingUsernameUser.data) {
      return responseHandler(res, {
        error: {
          message:
            "Username already in use. Please choose a different username.",
          statusCode: 400,
        },
      });
    }

    // Check if the email already exists
    const existingEmailUser = await getUser({ email: req.body.email });
    console.log(existingEmailUser);
    if (existingEmailUser.data) {
      return responseHandler(res, {
        error: {
          message: "Email already in use. Please use a different email.",
          statusCode: 400,
        },
      });
    }

    // Create the new user if no conflicts
    const user = await createUser(req.body);
    return responseHandler(res, user);
  } catch (error) {
    console.error(error); // Log any other errors for debugging
    return responseHandler(res, { error: error });
  }
};

// Controller function to handle retrieving users
const getAll = async (req, res) => {
  try {
    const user = await getAllUser();
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

// Controller function to handle retrieving users
const get = async (req, res) => {
  try {
    const user = await getUser(req.query);
    delete user.data.dataValues.password;
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

// Controller function to handle updating a user
const update = (req, res) => {
  return res.send({
    status: 200, // HTTP status code indicating success
    message: "Updated User", // Response message
    data: req.body, // Return the request body as part of the response data
    error: {}, // Empty error object (no errors occurred)
  });
};

// Controller function to handle removing a user
const remove = (req, res) => {
  return res.send({
    status: 200, // HTTP status code indicating success
    message: "Remove User", // Response message
    data: req.query, // Return the request query parameters as part of the response data
    error: {}, // Empty error object (no errors occurred)
  });
};

// Export all controller functions for use in routes
module.exports = { create, getAll, get, update, remove };

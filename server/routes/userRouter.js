var express = require("express"); // Import the Express framework
var router = express.Router(); // Create a new router instance

// Import controller functions for user operations
const {
  create, // Function to handle user creation
  getAll, // Function to handle retrieving all users
  update, // Function to handle updating a user
  remove, // Function to handle removing a user
  get,
} = require("../controllers/userController");

// Import validation middleware for user operations
const {
  createUser, // Middleware to validate user creation requests
  updateUser, // Middleware to validate user update requests
  removeUser, // Middleware to validate user removal requests
  getUser,
} = require("../validations/userValidator");

const middleware = require("../middleware");
/* Define routes and attach corresponding middleware and controllers */

// Route to create a user
// - Validates the request using `createUser` middleware
// - If validation succeeds, calls the `create` controller
router.post("/create", createUser, create);

// Route to retrieve all users
// - No validation required for this route
// - Calls the `getAll` controller to handle the request
router.get("/get-all", middleware, getAll);
router.get("/get", getUser, get);

// Route to update a user
// - Validates the request using `updateUser` middleware
// - If validation succeeds, calls the `update` controller
router.put("/update", updateUser, update);

// Route to delete a user
// - Validates the request using `removeUser` middleware
// - If validation succeeds, calls the `remove` controller
router.delete("/delete", removeUser, remove);

// Export the router to be used in other parts of the application
module.exports = router;

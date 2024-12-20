const routes = require("express").Router();

const { login } = require("../controllers/authController");
const { Login } = require("../validations/authValidator");

routes.post("/login", login);

module.exports = routes;

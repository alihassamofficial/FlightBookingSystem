const routes = require("express").Router();

const { create, get } = require("../controllers/adminController");

routes.post("/create", create);
routes.get("/get-all", get);

module.exports = routes;

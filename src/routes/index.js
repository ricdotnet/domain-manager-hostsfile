const routes = require("express").Router();

module.exports = routes;

const panel = require("./panel");

routes.use('/panel', panel);
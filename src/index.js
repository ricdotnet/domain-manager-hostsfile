const express = require("express");
const app = express();
const morgan = require('morgan')
require("dotenv").config();

const routes = require('./routes')

/**
 * Node Function
 */
const fs = require("fs").promises;
const os = require("os");
const dns = require("dns");

/**
 * App usage middlewares
 */
app.use(express.json())
app.use(morgan('dev'))
app.use(routes)

app.listen(process.env.PORT, async () => {
  console.log(`server is on and listening on port ${process.env.PORT}`);
});
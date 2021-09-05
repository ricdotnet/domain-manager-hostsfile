const express = require("express");
const App = express();
const morgan = require('morgan')
const cors = require('cors')
require("dotenv").config();

const {app, BrowserWindow} = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('../client/index.html')
}

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
App.use(express.json())
App.use(morgan('dev'))
App.use(cors())
App.use(routes)

App.listen(process.env.PORT, async () => {
  console.log(`server is on and listening on port ${process.env.PORT}`);
});

app.whenReady().then(() => {
  createWindow()
})
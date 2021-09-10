const express = require("express");
const App = express();
const morgan = require('morgan')
const cors = require('cors')
require("dotenv").config();

const {app, BrowserWindow} = require('electron')

const PORT = process.env.PORT || 3000

/**
 * Node Function
 */
 const fs = require("fs").promises;
 const os = require("os");
 const dns = require("dns");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  if(os.platform() === 'linux') {
    win.loadFile('../client/index.html')
  } else {
    win.loadFile('./client/index.html')
  }
}

const routes = require('./routes')

/**
 * App usage middlewares
 */
App.use(express.json())
App.use(morgan('dev'))
App.use(cors())
App.use(routes)

App.listen(PORT, async () => {
  console.log(`server is on and listening on port ${PORT}`);
});

app.whenReady().then(() => {
  createWindow()
})
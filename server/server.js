const express = require('express');
const path = require('path');
const middlewear = require('./config/middlewear').middlewear

const app = express();

const staticPath = path.join(__dirname, '/../client');
middlewear(app, express, staticPath);

console.log('MVP is listening on 3000');
app.listen(3000);

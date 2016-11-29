const express = require('express');
const path = require('path');
const middlewear = require('./config/middlewear').middlewear;
const routes = require('./config/routes').routes;

const app = express();
const port = process.env.PORT || 3000

const staticPath = path.join(__dirname, '/../client');
const scriptsPath = path.join(__dirname, '/../node_modules');

middlewear(app, express, staticPath, scriptsPath);
routes(app, express);

console.log('MVP is listening on 3000');
app.listen(port);

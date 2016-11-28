const morgan = require('morgan');
const bodyParser = require('body-parser');

exports.middlewear = function (app, express, staticPath) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(staticPath));
};

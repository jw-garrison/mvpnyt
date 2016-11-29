const SearchController = require('../search/SearchController').searchNYT;
const helpers = require('./helpers');

exports.routes = function (app, express) {
  app.post('/api/search', SearchController);
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

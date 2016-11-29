var request = require('request');
var key = require('../config/api').API_KEY;

exports.searchNYT = function (req, res) {
  var q = '"' + req.body.q + '"';
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': key,
      'q': q,
      'fl': "web_url,byline,snippet,multimedia,headline,lead_paragraph"
    },
  }, function(err, response, body) {
    body = JSON.parse(body);
    res.send(body.response.docs);
  });
};

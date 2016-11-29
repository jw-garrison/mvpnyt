var request = require('request');
var key = process.env.API_KEY || require('../config/api').API_KEY;

exports.searchNYT = function (req, res) {
  var q = '"' + req.body.q + '"';
  var page = req.body.page;
  console.log(page);
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': key,
      'page': page,
      'q': q,
      'fl': "web_url,byline,snippet,multimedia,headline,lead_paragraph"
    },
  }, function(err, response, body) {
    body = JSON.parse(body);
    res.send(body.response.docs);
  });
};

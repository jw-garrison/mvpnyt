var request = require('request');
var key = process.env.API_KEY || require('../config/api').API_KEY;

exports.searchNYT = function (req, res) {
  console.log(key);
  var q = '"' + req.body.q + '"';
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': key,
      'q': q,
      'fl': "web_url,byline,snippet,multimedia,headline,lead_paragraph"
    },
  }, function(err, response, body) {
    console.log(body.response.body);
    body = JSON.parse(body);
    res.send(body.response.docs);
  });
};

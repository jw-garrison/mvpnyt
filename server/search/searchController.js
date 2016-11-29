var request = require('request');
var key = process.env.API_KEY || require('../config/api').API_KEY;

exports.searchNYT = function (req, res) {
  console.log("API KEY, expecting: f431b82fab3743caaf8c33f2298a16f2", key);
  var q = '"' + req.body.q + '"';
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': key,
      'q': q,
      'fl': "web_url,byline,snippet,multimedia,headline,lead_paragraph"
    },
  }, function(err, response, body) {
    console.log('++++++++body:', body);
    console.log('++++++++body.response:', body.response);
    body = JSON.parse(body);
    res.send(body.response.docs);
  });
};

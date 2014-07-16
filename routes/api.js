var https = require('https');

exports.getRides = function(req, res) {
  var token = req.params.token;
  var userId = req.params.userId;

  var options = {
    hostname: 'cyclinganalytics.com',
    path: '/api/user/' + userId + '/rides',
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token }
  };

  var request = https.request(options, function(res) {
    console.log('status code: ', res.statusCode);

    res.on('data', function(data) {
      console.log(data);
    });
  });
  request.end();

  request.on('error', function(err) {
    console.log('YOU FUCKED UP:');
    console.error(err);
  });
};

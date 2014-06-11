exports.index = function(req, res) {
  res.render('index', { title: 'bikelab' });
};

exports.api = require('./api.js');

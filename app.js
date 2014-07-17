var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes');
var app = module.exports = express();

// setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, 'public/')));

// routes
app.get('/', routes.index);
app.get('/api/:token/user/:userId/rides', routes.api.getRides);

// app.use(routes.index);

http.createServer(app).listen(process.env.PORT || 8888, function() {
  console.log('Express server listening on port ' + process.env.PORT);
});

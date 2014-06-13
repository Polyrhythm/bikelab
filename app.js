var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes');
var app = module.exports = express();

// setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, 'public/')));
app.set('port', 8888);

// routes
app.get('/', routes.index);
app.get('/api/:token/user/:userId/rides', routes.api.getRides);

// app.use(routes.index);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

db.connection.connect();

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());


// Allow cross domain
// app.use(defaultCorsHeaders);

// Set up our routes
app.use('/classes', router);


// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}


// app.use(function(req, res, next) {
// 	res.setHeader('access-control-allow-origin', '*');
//   res.setHeader('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('access-control-allow-headers', 'content-type, accept');
//   res.setHeader('access-control-max-age', 10); 
// });
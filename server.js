var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var metrics = require('./api/controllers/metricsController');

var app = express();
var port = process.env.PORT || 3000;
app.set('json spaces', 2);

// Set app to make use of body parser for JSON or form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static data file setup
app.use('*/data', express.static('data'));

// Main home route
app.get('/', function(req, res) {
	res.send('It works.');
})

// Routes for data retrieval
app.get('/safety', metrics.safety);
app.get('/infection', metrics.infection);
app.get('/prevention', metrics.prevention);
app.get('/immunization', metrics.immunization);
app.get('/performance', metrics.performance);
app.get('/ratings', metrics.ratings);

// Start server
app.listen(port);
console.log('Hot Take RESTful API server started on: ' + port);

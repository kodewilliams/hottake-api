var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// Import controller functions
var metrics = require('./api/controllers/metricsController');

// Main home route
app.get('/', function(req, res) {
	res.send('It works.');
})

// Routes for data retrieval
app.get('/safety', metrics.safety_all);
app.get('/infection', metrics.infection_all);
app.get('/prevention', metrics.prevention_all);

// Start server
app.listen(port);
console.log('Hot Take RESTful API server started on: ' + port);

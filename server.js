var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var metrics = require('./api/controllers/metricsController');
var geo = require('./api/controllers/geographyController');

var port = process.env.PORT || 3000;
app.set('json spaces', 2);

// Set CORS middleware
app.use(cors());

// Set app to make use of body parser for JSON or form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Static data file setup
app.use('*/data', express.static('data'));

app.options('*', cors())

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

app.get('/geography', geo.coordinates);

// Start server
app.listen(port);
console.log('Hot Take RESTful API server started on: ' + port);

var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
// var csvjson = require('csvjson');
var data;

// Task = mongoose.model('Tasks');

// Returns all the safety data in JSON format.
module.exports.safety = function(req, res) {
	data = JSON.parse(fs.readFileSync('data/json/safety-data.json', { encoding : 'utf8' }));

	res.json(data);

	// // Check for URL params (zip code or safety score)
	// if (!req.query.zip_code) {
	// 	res.json(results);
	// } else {
	// 	// Search for the zip code
	// 	res.json(results.zip_code);
	// }

};

// Returns all the infection data in JSON format.
module.exports.infection = function(req, res) {
  data = JSON.parse(fs.readFileSync('data/json/infection-data.json', { encoding : 'utf8' }));

	res.json(data);
};

// Returns all the prevention data in JSON format.
module.exports.prevention = function(req, res) {
  data = JSON.parse(fs.readFileSync('data/json/prevention-data.json', { encoding : 'utf8' }));

	res.json(data);
};

// Returns all the immunization data in JSON format.
module.exports.immunization = function(req, res) {
	data = JSON.parse(fs.readFileSync('data/json/immunization-data.json', { encoding : 'utf8' }));

	res.json(data);
};

// Returns all the hospital performance data in JSON format. (govt)
module.exports.performance = function(req, res) {
	data = JSON.parse(fs.readFileSync('data/json/performance-data.json', { encoding : 'utf8' }));

	res.json(data);
};

// Returns all the hospital patient ratings in JSON format.
module.exports.ratings = function(req, res) {
	data = JSON.parse(fs.readFileSync('data/json/ratings-data.json', { encoding : 'utf8' }));

	res.json(data);
};
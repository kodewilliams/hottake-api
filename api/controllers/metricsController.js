var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var data;

var searchableByZipCode = function(req, res, data) {
	// Check for URL param zip code
	if (!req.query.zip_code) {
		res.json(data);
	} else {
		// Search for the zip code
		var results = data.filter(entry => entry.zip_code == req.query.zip_code);

		if (results.length < 1)
			res.status(400).send('No matches found.');
		else
			res.json(results);
	}
}


// Returns all the safety data in JSON format.
module.exports.safety = function(req, res, next) {
	data = JSON.parse(fs.readFileSync('data/json/safety-data.json', { encoding : 'utf8' }));
	searchableByZipCode(req, res, data);
};

// Returns all the infection data in JSON format.
module.exports.infection = function(req, res, next) {
  data = JSON.parse(fs.readFileSync('data/json/infection-data.json', { encoding : 'utf8' }));
	searchableByZipCode(req, res, data);
};

// Returns all the prevention data in JSON format.
module.exports.prevention = function(req, res, next) {
  data = JSON.parse(fs.readFileSync('data/json/prevention-data.json', { encoding : 'utf8' }));
	searchableByZipCode(req, res, data);
};

// Returns all the immunization data in JSON format.
module.exports.immunization = function(req, res, next) {
	data = JSON.parse(fs.readFileSync('data/json/immunization-data.json', { encoding : 'utf8' }));

	// Check for URL param state symbol
	if (!req.query.state) {
		res.json(data);
	} else {
		// Search for the state symbol
		var results = data.filter(entry => entry.state.toUpperCase() == req.query.state.toUpperCase());

		if (results.length < 1)
			res.status(400).send('No matches found.');
		else
			res.json(results);
	}
};

// Returns all the hospital performance data in JSON format. (govt)
module.exports.performance = function(req, res, next) {
	data = JSON.parse(fs.readFileSync('data/json/performance-data.json', { encoding : 'utf8' }));
	searchableByZipCode(req, res, data);
};

// Returns all the hospital patient ratings in JSON format.
module.exports.ratings = function(req, res, next) {
	data = JSON.parse(fs.readFileSync('data/json/ratings-data.json', { encoding : 'utf8' }));
	searchableByZipCode(req, res, data);
};
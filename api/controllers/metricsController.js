var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var csvjson = require('csvjson');
var prettyjson = require('prettyjson');
var data;

// Task = mongoose.model('Tasks');

// Returns all the safety data in JSON format.
module.exports.safety = function(req, res) {
	data = fs.readFileSync('data/safety.csv', { encoding : 'utf8' });
	var results = csvjson.toObject(data, { delimiter: ',' });
	res.json(results);
	
};

// Returns all the infection data in JSON format.
module.exports.infection = function(req, res) {
  data = fs.readFileSync('data/infection.csv', { encoding : 'utf8' });
	var results = csvjson.toObject(data, { delimiter: ',' });
	res.json(results);
};

// Returns all the prevention data in JSON format.
module.exports.prevention = function(req, res) {
  data = fs.readFileSync('data/prevention.csv', { encoding : 'utf8' });
	var results = csvjson.toObject(data, { delimiter: ',' });
	res.json(results);
};

// Returns all the immunization data in JSON format.
module.exports.immunization = function(req, res) {
	data = fs.readFileSync('data/immunization.csv', { encoding : 'utf8' });
	var results = csvjson.toObject(data, { delimiter: ',' });
	res.json(results);
};

// Returns all the hospital performance data in JSON format. (govt)
module.exports.performance = function(req, res) {
	data = fs.readFileSync('data/performance.csv', { encoding : 'utf8' });
	var results = csvjson.toObject(data, { delimiter: ',' });
	res.json(results);
};

// Returns all the hospital patient ratings in JSON format.
module.exports.ratings = function(req, res) {
	data = fs.readFileSync('data/ratings.csv', { encoding : 'utf8' });
	var results = csvjson.toObject(data, { delimiter: ',' });
	res.json(results);
};
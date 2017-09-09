var mongoose = require('mongoose');
// Task = mongoose.model('Tasks');

// Returns all the safety data in JSON format.
module.exports.safety_all = function(req, res) {
  res.json('All safety data.');
};

// Returns all the infection data in JSON format.
module.exports.infection_all = function(req, res) {
  res.json('All infection data.');
};

// Returns all the prevention data in JSON format.
module.exports.prevention_all = function(req, res) {
  res.json('All prevention data.');
};
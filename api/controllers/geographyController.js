var fs = require('fs');

// Returns all the safety data in JSON format.
module.exports.coordinates = function(req, res, next) {
	var data;
	data = JSON.parse(fs.readFileSync('data/json/geography.json', { encoding : 'utf8' }));
	
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
};
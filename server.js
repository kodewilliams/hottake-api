var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


// Start server
app.listen(port);
console.log('Hot Take RESTful API server started on: ' + port);

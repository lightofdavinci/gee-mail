'use strict';
var express = require('express');
var app = express();

app.get('/',function (req, res) {
			res.sendFile(process.cwd() + '/index.html');
		});

var port = process.env.PORT;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
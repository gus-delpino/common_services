var express = require('express');

var moment = require('moment');
var bodyParser = require('body-parser');

var app = express();

var port = 8080;

console.log('Test');

app.listen( port, () => {
    console.log("Server running at port " + port);
});


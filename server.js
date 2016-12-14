var express = require('express');

var moment = require('moment');
var bodyParser = require('body-parser');

var mailer_routes = require('./mailer/routes');

var app = express();
var port = 8080;

//Routes/Middleware
require('./routes/routes')(app);

app.listen( port, () => {
    console.log("Server running at port " + port);
});


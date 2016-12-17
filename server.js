var express = require('express');

var moment = require('moment');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
//Check if we have environment variables
if( !process.env || !process.env.PORT ) {
    require('./local_config');
}

var port = process.env.PORT;

//Routes/Middleware
require('./routes/routes')(app);

app.listen( port, () => {
    console.log("Server running at port " + port);
});


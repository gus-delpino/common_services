var mailer_routes = require('../mailer/routes');

var routes = function(app) {

    // Validation middleware
    app.use( (req, res, next) => {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });
    app.get('/health', (req, res) => {
        res.send('Sup');
    });

    // Mailer endpoints
    app.use('/mailer', mailer_routes);

};

module.exports = routes;
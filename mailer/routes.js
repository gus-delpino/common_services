var express = require('express'),
    router = express.Router();

var MailerController = require('./controller');

router.post('/sendGpmContactMe', MailerController.sendContactMeEmail );

module.exports = router;
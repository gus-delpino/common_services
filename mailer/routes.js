var express = require('express'),
    router = express.Router();

var MailerController = require('./controller');

router.post('/sendGpmContactMe', MailerController.sendContactMeEmail.bind(MailerController) );

module.exports = router;
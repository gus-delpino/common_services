'use strict';

class MailerController {

    constructor() {

    }

    sendContactMeEmail(req, res) {

        res.send("Ok Contact me sent!");
    }

}

module.exports = new MailerController();
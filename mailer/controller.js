'use strict';

var nodemailer = require('nodemailer');
var mailer_settings = require('./mailer_config');

class MailerController {

    constructor() {
        this.transporter = nodemailer.createTransport(mailer_settings.smtpConfig);
    }

    verifyTransporter() {
        return new Promise( (resolve, reject) => {
            this.transporter.verify( (err, success) => {
                if (err) {
                    reject(err);
                    return false;
                }
                resolve(success);
                return true;
            });
        });
    }

    sendEmail(mailer_site, subject, body) {
        return new Promise( (resolve, reject) => {
            if (!mailer_site || !mailer_settings[mailer_site]) {
                reject('Error: No mailer site specified or invalid');
                return false;
            }

            let mailOptions = {
                from: mailer_settings[mailer_site].FROM,
                to: mailer_settings[mailer_site].EMAIL,
                subject: subject,
                html: body
            };

            this.transporter.sendMail(mailOptions, (err, info) => {
                if(err) {
                    reject(err);
                    return false;
                }
                if(!info) {
                    reject(`Unknown error: No 'info' from server, could not verify whether message was sent or not`);
                    return false;
                }

                //Confirm that email has been accepted
                if( !( ~info['accepted'].indexOf(mailer_settings[mailer_site].EMAIL) ) ) {
                    reject(`Unknown error: '${mailer_settings[mailer_site].EMAIL}' is not in the 'accepted' list`);
                    return false;
                }
                resolve(info);
                return true;
            });
        });
    }

    sendContactMeEmail(req, res) {
        let subject = 'Testing subject',
            body = 'Testing email body. <b>Bold text</b>',
            mailer_site = 'gustavodelpino';

        this.verifyTransporter()
            .then( () => this.sendEmail(mailer_site, subject, body) )
            .then( info => res.send(info) )
            .catch( err => res.send(err) );
    }

}

module.exports = new MailerController();
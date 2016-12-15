if(!process.env.MAILER) {
    require( process.cwd() + '/local_config');
}

var smtpConfig = {
    host: process.env.MAILER.SERVER,
    port: process.env.MAILER.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.MAILER.USER,
        pass: process.env.MAILER.PASSWORD
    }
};



module.exports = {
    smtpConfig: smtpConfig,
    gustavodelpino: process.env.MAILER.GUSTAVODELPINO,
    kaylajacobs: process.env.MAILER.KAYLAJACOBS
};
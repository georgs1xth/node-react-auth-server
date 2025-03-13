const nodemailer = require('nodemailer')

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host:
            port:
            secure: falsem
            auth: {

            }
        })
    }

    async sendActivationMail(to, link) {

    }
}

module.exports = new MailService();
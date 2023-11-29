const nodemailer = require("nodemailer");

const enviarEmail = async () => {

    let transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    let message = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>Seu pedido foi confirmado com sucesso!</p>"
    };

    transport.sendMail(message);
}

module.exports = {
    enviarEmail
}


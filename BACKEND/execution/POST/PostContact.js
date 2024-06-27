const nodemailer = require('nodemailer');

exports.PostContact = async (req, res, server) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: email,
        to: 'contact@carauction.com',
        subject: `Contact form submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500)
            server.renderTemplate(res, req, 'contact', { message: {
                type: 'error',
                text: "Pour une raison de confidentialité nous n'avons pas configuré nodemailer allan"
            } });
        } else {
            console.log('Email sent: ' + info.response);
            server.renderTemplate(res, req, 'contact', { message: {
                type: 'error',
                text: "Pour une raison de confidentialité nous n'avons pas configuré nodemailer allan"
            } });
        }
    });
}
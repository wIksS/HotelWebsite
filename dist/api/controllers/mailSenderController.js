'use strict';

var nodemailer = require('nodemailer');

exports.send_mail = function (req, res) {
    var room = req.body.selected;

    nodemailer.createTestAccount(function (err, account) {
        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'bakalov2002.service@gmail.com', // generated ethereal user
                pass: 'B@k@l0v2oo2' // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        var mailOptions = {
            from: 'bakalov2002.service@gmail.com', // sender address
            to: ['jjilkov@gmail.com', 'bakalov2002@gmail.com', 'tdd@dekom.bg', 'viktordakov97@gmail.com'], // list of receivers
            subject: 'Запитване за стая', // Subject line
            html: '<div style="font-size:17px"><p>Тип стая: <strong>' + room.title + '</strong></p>' + '<p>Пристигане: <strong>' + req.body.arriveDate + '</strong></p>' + '<p>Заминаване: <strong>' + req.body.departureDate + '</strong></p>' + '<p>Име: <strong>' + req.body.name + '</strong></p>' + '<p>Телефон: <strong>' + req.body.phone + '</strong></p>' + '<p>Възрастни: <strong>' + req.body.adults + '</strong></p>' + '<p>Деца: <strong>' + req.body.kids + '</strong></p></div>'
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send(error);
                return;
            }

            res.send({ result: true });
            // Preview only available when sending through an Ethereal account
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
};
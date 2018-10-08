'use strict';
module.exports = function(app) {
    var controller = require('../controllers/mailSenderController');

    app.route('/api/sendMail')
        .post(controller.send_mail)
};
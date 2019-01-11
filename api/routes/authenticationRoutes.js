'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/authenticationController');

    // todoList Routes
    app.route('/api/authenticate')
        .get(todoList.authenticate);
};
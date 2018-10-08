'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/hotelDescriptionController');

    // todoList Routes
    app.route('/api/hotelDescription')
        .get(todoList.read_hotel_description)
        .post(todoList.update_hotel_description);

};
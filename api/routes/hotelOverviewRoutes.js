'use strict';
module.exports = function(app) {
    var controller = require('../controllers/hotelOverviewController');

    // todoList Routes
    app.route('/api/hotelOverview')
        .get(controller.read_hotel_overview)
        .post(controller.update_hotel_overview);
};
'use strict';
module.exports = function(app) {
    var controller = require('../controllers/hotelRatesController');

    app.route('/api/hotelRates')
        .get(controller.read_hotel_rates)
        .post(controller.update_hotel_rates);
};
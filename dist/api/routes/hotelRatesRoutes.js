'use strict';

module.exports = function (app) {
    var controller = require('../controllers/hotelRatesController');

    app.route('/api/hotelRates').get(controller.read_hotel_rates).put(controller.update_hotel_rates).post(controller.add_hotel_rate).delete(controller.delete_hotel_rate);
};
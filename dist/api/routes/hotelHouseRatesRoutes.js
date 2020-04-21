'use strict';

module.exports = function (app) {
    var controller = require('../controllers/hotelHouseRatesController');

    app.route('/api/hotelHouseRates').get(controller.read_hotel_house_rates).put(controller.update_hotel_house_rates).post(controller.add_hotel_house_rate).delete(controller.delete_hotel_house_rate);
};
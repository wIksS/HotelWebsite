'use strict';
const mongoose = require('mongoose');
const HotelRates = mongoose.model('HotelRates');
const CONSTS = require('../../helpers/const')

exports.read_hotel_rates = function (req, res) {
    HotelRates.findById(CONSTS.hotetlRatesId, function (err, data) {
        if(err){
            res.send(err);
        }
        if(data) {
            res.send(data);
        }
    })
};

exports.update_hotel_rates = function (req, res) {
    HotelRates.findOneAndUpdate({_id: CONSTS.hotetlRatesId}, req.body, {new: true}, function(err, data) {
        if (err) {
            res.send(err);
        }

        res.json(data);
    });
};


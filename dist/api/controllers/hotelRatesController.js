'use strict';

var mongoose = require('mongoose');
var HotelRates = mongoose.model('HotelRates');
var CONSTS = require('../../helpers/const');
var Guid = require('guid');
exports.read_hotel_rates = function (req, res) {
    HotelRates.find({}).sort('_id').exec(function (err, data) {
        if (err) {
            res.send(err);
        }
        if (data) {
            res.send(data);
        }
    });
};

exports.update_hotel_rates = function (req, res) {
    HotelRates.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, function (err, data) {
        if (err) {
            res.send(err);
        }

        HotelRates.find({}).sort('_id').exec(function (err, data) {
            if (err) {
                res.send(err);
            }
            if (data) {
                res.send(data);
            }
        });
    });
};

exports.add_hotel_rate = function (req, res) {
    var newHotelRate = new HotelRates(req.body);
    console.log(newHotelRate);
    newHotelRate.save(function (err, data) {
        if (err) {
            res.send(err);
        }
        if (data) {
            HotelRates.find({}).sort('_id').exec(function (err, data) {
                if (err) {
                    res.send(err);
                }
                if (data) {
                    res.send(data);
                }
            });
        }
    });
};

exports.delete_hotel_rate = function (req, res) {
    HotelRates.remove({ _id: req.body._id }, function (err) {
        if (err) {
            res.send(err);
        }

        HotelRates.find({}).sort('_id').exec(function (err, data) {
            if (err) {
                res.send(err);
            }
            if (data) {
                res.send(data);
            }
        });
    });
};
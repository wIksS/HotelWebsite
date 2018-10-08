'use strict';

var mongoose = require('mongoose');
var HotelDescription = mongoose.model('HotelDescriptions');
var CONSTS = require('../../helpers/const');

exports.read_hotel_description = function (req, res) {
    HotelDescription.findById(CONSTS.hotetlDescriptionId, function (err, data) {
        if (err) {
            res.send(err);
        }

        res.send(data);
    });
};

exports.update_hotel_description = function (req, res) {
    HotelDescription.findOneAndUpdate({ _id: CONSTS.hotetlDescriptionId }, req.body, { new: true }, function (err, data) {
        if (err) {
            res.send(err);
        }

        res.json(data);
    });
};
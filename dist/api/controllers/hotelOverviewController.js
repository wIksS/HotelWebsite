'use strict';

var mongoose = require('mongoose');
var HotelOverview = mongoose.model('HotelOverviews');
var CONSTS = require('../../helpers/const');

exports.read_hotel_overview = function (req, res) {
    HotelOverview.findById(CONSTS.hotetlOverviewId, function (err, data) {
        if (err) {
            res.send(err);
        }
        if (data) {
            res.send(data);
        }
    });
};

exports.update_hotel_overview = function (req, res) {
    HotelOverview.findOneAndUpdate({ _id: CONSTS.hotetlOverviewId }, req.body, { new: true }, function (err, data) {
        if (err) {
            res.send(err);
        }

        res.json(data);
    });
};
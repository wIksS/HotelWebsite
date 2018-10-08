'use strict';
const mongoose = require('mongoose');
const HotelOverview = mongoose.model('HotelOverviews');
const CONSTS = require('../../helpers/const')

exports.read_hotel_overview = function (req, res) {
    HotelOverview.findById(CONSTS.hotetlOverviewId, function (err, data) {
        if(err){
            res.send(err);
        }
        if(data) {
            res.send(data);
        }
    })
};

exports.update_hotel_overview = function (req, res) {
    HotelOverview.findOneAndUpdate({_id: CONSTS.hotetlOverviewId}, req.body, {new: true}, function(err, data) {
        if (err) {
            res.send(err);
        }

        res.json(data);
    });
};


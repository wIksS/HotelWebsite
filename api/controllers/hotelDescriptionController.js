'use strict';


const mongoose = require('mongoose');
const HotelDescription = mongoose.model('HotelDescriptions');
const CONSTS = require('../../helpers/const')

exports.read_hotel_description = function (req, res) {
    HotelDescription.findById(CONSTS.hotetlDescriptionId, function (err, data) {
        if(err){
            res.send(err);
        }

        res.send(data);
    })
};

exports.update_hotel_description = function (req, res) {
    HotelDescription.findOneAndUpdate({_id: CONSTS.hotetlDescriptionId}, req.body, {new: true}, function(err, data) {
        if (err) {
            res.send(err);
        }

        res.json(data);
    });
};


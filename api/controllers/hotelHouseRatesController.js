'use strict';
const mongoose = require('mongoose');
const HotelHouseRates = mongoose.model('HotelHouseRates');
const CONSTS = require('../../helpers/const')
const Guid =  require('guid');
exports.read_hotel_house_rates = function (req, res) {
    HotelHouseRates.find({}).sort('_id').exec(function(err, data) {
        if(err){
            res.send(err);
        }
        if(data) {
            res.send(data);
        }
    });
};

exports.update_hotel_house_rates = function (req, res) {
    HotelHouseRates.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, function(err, data) {
        if (err) {
            res.send(err);
        }

        HotelHouseRates.find({}).sort('_id').exec(function(err, data) {
            if(err){
                res.send(err);
            }
            if(data) {
                res.send(data);
            }
        });
    });
};

exports.add_hotel_house_rate = function (req, res) {
    let newHotelRate = new HotelHouseRates(req.body);

    newHotelRate.save(function (err, data) {
        if(err) {
            res.send(err);
        }
        if(data) {
            HotelHouseRates.find({}).sort('_id').exec(function(err, data) {
                if(err){
                    res.send(err);
                }
                if(data) {
                    res.send(data);
                }
            });
        }
    })
};

exports.delete_hotel_house_rate = function (req, res) {
    HotelHouseRates.remove({_id: req.body._id}, function(err) {
        if (err) {
            res.send(err);
        }

        HotelHouseRates.find({}).sort('_id').exec(function(err, data) {
            if(err){
                res.send(err);
            }
            if(data) {
                res.send(data);
            }
        });
    })
};

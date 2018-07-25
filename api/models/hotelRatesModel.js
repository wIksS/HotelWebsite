'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelRatesSchema = new Schema({
    _id: {
        type: String,
    },
    title: {
        type: String,
        required: "This field is required"
    },
    properties: {
        type: Array,
        required: "This field is required"
    },
    url: {
        type: String,
        required: "This field is required"
    },
}, {_id: false});

module.exports = mongoose.model('HotelRates', HotelRatesSchema);
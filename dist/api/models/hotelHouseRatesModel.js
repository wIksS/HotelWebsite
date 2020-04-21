'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var HotelHouseRatesSchema = new Schema({
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
    images: {
        type: Array,
        required: "This field is required"
    },
    description: {
        type: String,
        required: "This field is required"
    }
});

HotelHouseRatesSchema.plugin(autoIncrement.plugin, { model: 'HotelHouseRates' });

module.exports = mongoose.model('HotelHouseRates', HotelHouseRatesSchema);
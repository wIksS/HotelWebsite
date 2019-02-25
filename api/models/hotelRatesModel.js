'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var HotelRatesSchema = new Schema({
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
    images:{
        type:Array,
        required: "This field is required"
    },
    description: {
        type: String,
        required: "This field is required"
    },
});

HotelRatesSchema.plugin(autoIncrement.plugin, { model: 'HotelRates' });


module.exports = mongoose.model('HotelRates', HotelRatesSchema);
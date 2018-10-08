'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelOverviewSchema = new Schema({
    _id: {
        type: String,
    },
    description: {
        type: String,
        required: "This field is required"
    },
    properties: {
        type: Array,
        required: "This field is required"
    },
}, {_id: false});

module.exports = mongoose.model('HotelOverviews', HotelOverviewSchema);
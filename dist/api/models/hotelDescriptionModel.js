'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelDescriptionSchema = new Schema({
    _id: {
        type: String
    },
    title: {
        type: String,
        required: "This field is required"
    },
    subTitle: {
        type: String,
        required: "This field is required"
    },
    description: {
        type: String,
        required: "This field is required"
    }
}, { _id: false });

module.exports = mongoose.model('HotelDescriptions', HotelDescriptionSchema);
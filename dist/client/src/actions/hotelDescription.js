'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECEIVE_HOTEL_DESCRIPTION = exports.REQUEST_HOTEL_DESCRIPTION = undefined;
exports.fetchHotelDescription = fetchHotelDescription;
exports.postHotelDescription = postHotelDescription;

require('babel-polyfill');

var _crossFetch = require('cross-fetch');

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _constants = require('../helpers/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_HOTEL_DESCRIPTION = exports.REQUEST_HOTEL_DESCRIPTION = 'REQUEST_HOTEL_DESCRIPTION';
function requestHotelDescription() {
    return {
        type: REQUEST_HOTEL_DESCRIPTION,
        isFetching: true
    };
}

var RECEIVE_HOTEL_DESCRIPTION = exports.RECEIVE_HOTEL_DESCRIPTION = 'RECEIVE_HOTEL_DESCRIPTION';
function receiveHotelDescription(json) {

    return {
        type: RECEIVE_HOTEL_DESCRIPTION,
        isFetching: false,
        hotelDescription: json,
        receivedAt: Date.now()
    };
}

function fetchHotelDescription() {
    return function (dispatch) {
        dispatch(requestHotelDescription());

        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelDescription').then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occurred.', error);
        }).then(function (json) {
            return dispatch(receiveHotelDescription(json));
        });
    };
}

function postHotelDescription(hotelDescription) {
    return function (dispatch) {
        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelDescription', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hotelDescription)
        }).then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occurred.', error);
        }).then(function (json) {
            return dispatch(receiveHotelDescription(json));
        });
    };
}
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECEIVE_HOTEL_HOUSE_RATES = exports.REQUEST_HOTEL_HOUSE_RATES = undefined;
exports.fetchHotelHouseRates = fetchHotelHouseRates;
exports.postHotelHouseRates = postHotelHouseRates;
exports.addHotelHouseRates = addHotelHouseRates;
exports.deleteHotelHouseRates = deleteHotelHouseRates;

require('babel-polyfill');

var _crossFetch = require('cross-fetch');

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _constants = require('../helpers/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_HOTEL_HOUSE_RATES = exports.REQUEST_HOTEL_HOUSE_RATES = 'REQUEST_HOTEL_HOUSE_RATES';
function requestHotelHouseRates() {
    return {
        type: REQUEST_HOTEL_HOUSE_RATES,
        hotelHouseRates: {},
        isFetching: true
    };
}

var RECEIVE_HOTEL_HOUSE_RATES = exports.RECEIVE_HOTEL_HOUSE_RATES = 'RECEIVE_HOTEL_HOUSE_RATES';
function receiveHotelHouseRates(json) {
    return {
        type: RECEIVE_HOTEL_HOUSE_RATES,
        isFetching: false,
        hotelHouseRates: json,
        receivedAt: Date.now()
    };
}

function fetchHotelHouseRates() {
    return function (dispatch) {
        dispatch(requestHotelHouseRates());

        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelHouseRates').then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occurred.', error);
        }).then(function (json) {
            return dispatch(receiveHotelHouseRates(json));
        });
    };
}

function postHotelHouseRates(hotelRates) {
    return function (dispatch) {
        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelHouseRates', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hotelRates)
        }).then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occurred.', error);
        }).then(function (json) {
            return dispatch(receiveHotelHouseRates(json));
        });
    };
}

function addHotelHouseRates(hotelRates) {
    return function (dispatch) {
        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelHouseRates', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hotelRates)
        }).then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occurred.', error);
        }).then(function (json) {
            return dispatch(receiveHotelHouseRates(json));
        });
    };
}

function deleteHotelHouseRates(hotelRates) {
    return function (dispatch) {
        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelHouseRates', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hotelRates)
        }).then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occurred.', error);
        }).then(function (json) {
            return dispatch(receiveHotelHouseRates(json));
        });
    };
}
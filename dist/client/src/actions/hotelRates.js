'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECEIVE_HOTEL_RATES = exports.REQUEST_HOTEL_RATES = undefined;
exports.fetchHotelRates = fetchHotelRates;
exports.postHotelRates = postHotelRates;
exports.addHotelRates = addHotelRates;
exports.deleteHotelRates = deleteHotelRates;

require('babel-polyfill');

var _crossFetch = require('cross-fetch');

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _constants = require('../helpers/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_HOTEL_RATES = exports.REQUEST_HOTEL_RATES = 'REQUEST_HOTEL_RATES';
function requestHotelRates() {
    return {
        type: REQUEST_HOTEL_RATES,
        hotelRates: {},
        isFetching: true
    };
}

var RECEIVE_HOTEL_RATES = exports.RECEIVE_HOTEL_RATES = 'RECEIVE_HOTEL_RATES';
function receiveHotelRates(json) {
    return {
        type: RECEIVE_HOTEL_RATES,
        isFetching: false,
        hotelRates: json,
        receivedAt: Date.now()
    };
}

function fetchHotelRates() {
    return function (dispatch) {
        dispatch(requestHotelRates());

        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelRates').then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occurred.', error);
        }).then(function (json) {
            return dispatch(receiveHotelRates(json));
        });
    };
}

function postHotelRates(hotelRates) {
    return function (dispatch) {
        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelRates', {
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
            return dispatch(receiveHotelRates(json));
        });
    };
}

function addHotelRates(hotelRates) {
    return function (dispatch) {
        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelRates', {
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
            return dispatch(receiveHotelRates(json));
        });
    };
}

function deleteHotelRates(hotelRates) {
    return function (dispatch) {
        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/hotelRates', {
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
            return dispatch(receiveHotelRates(json));
        });
    };
}
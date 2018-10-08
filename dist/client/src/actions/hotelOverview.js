'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECEIVE_HOTEL_OVERVIEW = exports.REQUEST_HOTEL_OVERVIEW = undefined;
exports.fetchHotelOverview = fetchHotelOverview;
exports.postHotelOverview = postHotelOverview;

require('babel-polyfill');

var _crossFetch = require('cross-fetch');

var _crossFetch2 = _interopRequireDefault(_crossFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_HOTEL_OVERVIEW = exports.REQUEST_HOTEL_OVERVIEW = 'REQUEST_HOTEL_OVERVIEW';
function requestHotelOverview() {
    return {
        type: REQUEST_HOTEL_OVERVIEW,
        hotelOverview: {},
        isFetching: true
    };
}

var RECEIVE_HOTEL_OVERVIEW = exports.RECEIVE_HOTEL_OVERVIEW = 'RECEIVE_HOTEL_OVERVIEW';
function receiveHotelOverview(json) {

    return {
        type: RECEIVE_HOTEL_OVERVIEW,
        isFetching: false,
        hotelOverview: json,
        receivedAt: Date.now()
    };
}

function fetchHotelOverview() {
    return function (dispatch) {
        dispatch(requestHotelOverview());

        return (0, _crossFetch2.default)('/api/hotelOverview').then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occurred.', error);
        }).then(function (json) {
            return dispatch(receiveHotelOverview(json));
        });
    };
}

function postHotelOverview(hotelDescription) {
    return function (dispatch) {
        return (0, _crossFetch2.default)('/api/hotelOverview', {
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
            return dispatch(receiveHotelOverview(json));
        });
    };
}
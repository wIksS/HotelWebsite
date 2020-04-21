'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECEIVE_MAIL = exports.REQUEST_MAIL = undefined;
exports.sendMail = sendMail;

require('babel-polyfill');

var _crossFetch = require('cross-fetch');

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _constants = require('../helpers/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_MAIL = exports.REQUEST_MAIL = 'REQUEST_MAIL';
function requestMail() {
    return {
        type: REQUEST_MAIL,
        mail: {},
        isFetching: true
    };
}

var RECEIVE_MAIL = exports.RECEIVE_MAIL = 'RECEIVE_MAIL';
function receiveMail(json) {
    return {
        type: RECEIVE_MAIL,
        isFetching: false,
        mail: json,
        receivedAt: Date.now()
    };
}

function sendMail(mailData) {
    return function (dispatch) {
        dispatch(requestMail());

        return (0, _crossFetch2.default)(_constants.BaseUrl + '/api/sendMail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mailData)
        }).then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occurred.', error);
        }).then(function (json) {
            return dispatch(receiveMail(json));
        });
    };
}
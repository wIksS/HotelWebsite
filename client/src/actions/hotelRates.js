import 'babel-polyfill'
import fetch from 'cross-fetch'
import {BaseUrl} from "../helpers/constants";
export const REQUEST_HOTEL_RATES = 'REQUEST_HOTEL_RATES';
function requestHotelRates() {
    return {
        type: REQUEST_HOTEL_RATES,
        hotelRates: {},
        isFetching:true
    }
}

export const RECEIVE_HOTEL_RATES = 'RECEIVE_HOTEL_RATES'
function receiveHotelRates(json) {
    return {
        type: RECEIVE_HOTEL_RATES,
        isFetching:false,
        hotelRates:json,
        receivedAt: Date.now()
    }
}

export function fetchHotelRates() {
    return dispatch => {
        dispatch(requestHotelRates());

        return fetch(BaseUrl + '/api/hotelRates')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveHotelRates(json)))
    }
}

export function postHotelRates(hotelRates) {
    return dispatch => {
        return fetch(BaseUrl + '/api/hotelRates',{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hotelRates)
        })
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveHotelRates(json)))
    }
}

export function addHotelRates(hotelRates) {
    return dispatch => {
        return fetch(BaseUrl + '/api/hotelRates',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hotelRates)
        })
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveHotelRates(json)))
    }
}

export function deleteHotelRates(hotelRates) {
    return dispatch => {
        return fetch(BaseUrl + '/api/hotelRates',{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hotelRates)
        })
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveHotelRates(json)))
    }
}

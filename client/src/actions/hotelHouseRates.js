import 'babel-polyfill'
import fetch from 'cross-fetch'
export const REQUEST_HOTEL_HOUSE_RATES = 'REQUEST_HOTEL_HOUSE_RATES';
function requestHotelHouseRates() {
    return {
        type: REQUEST_HOTEL_HOUSE_RATES,
        hotelHouseRates: {},
        isFetching:true
    }
}

export const RECEIVE_HOTEL_HOUSE_RATES = 'RECEIVE_HOTEL_HOUSE_RATES'
function receiveHotelHouseRates(json) {
    return {
        type: RECEIVE_HOTEL_HOUSE_RATES,
        isFetching:false,
        hotelHouseRates:json,
        receivedAt: Date.now()
    }
}

export function fetchHotelHouseRates() {
    return dispatch => {
        dispatch(requestHotelHouseRates());

        return fetch(`http://185.80.1.67:8080/api/hotelHouseRates`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveHotelHouseRates(json)))
    }
}

export function postHotelHouseRates(hotelRates) {
    return dispatch => {
        return fetch(`http://185.80.1.67:8080/api/hotelHouseRates`,{
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
            .then(json => dispatch(receiveHotelHouseRates(json)))
    }
}

export function addHotelHouseRates(hotelRates) {
    return dispatch => {
        return fetch(`http://185.80.1.67:8080/api/hotelHouseRates`,{
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
            .then(json => dispatch(receiveHotelHouseRates(json)))
    }
}

export function deleteHotelHouseRates(hotelRates) {
    return dispatch => {
        return fetch(`http://185.80.1.67:8080/api/hotelHouseRates`,{
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
            .then(json => dispatch(receiveHotelHouseRates(json)))
    }
}

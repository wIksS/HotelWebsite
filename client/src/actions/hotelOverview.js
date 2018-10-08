import 'babel-polyfill'
import fetch from 'cross-fetch'

export const REQUEST_HOTEL_OVERVIEW = 'REQUEST_HOTEL_OVERVIEW';
function requestHotelOverview() {
    return {
        type: REQUEST_HOTEL_OVERVIEW,
        hotelOverview: {},
        isFetching:true
    }
}

export const RECEIVE_HOTEL_OVERVIEW = 'RECEIVE_HOTEL_OVERVIEW'
function receiveHotelOverview(json) {

    return {
        type: RECEIVE_HOTEL_OVERVIEW,
        isFetching:false,
        hotelOverview:json,
        receivedAt: Date.now()
    }
}

export function fetchHotelOverview() {
    return dispatch => {
        dispatch(requestHotelOverview());

        return fetch(`http://185.80.1.67:8080/api/hotelOverview`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveHotelOverview(json)))
    }
}

export function postHotelOverview(hotelDescription) {
    return dispatch => {
        return fetch(`http://185.80.1.67:8080/api/hotelOverview`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hotelDescription)
        })
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveHotelOverview(json)))
    }
}

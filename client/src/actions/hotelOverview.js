import 'babel-polyfill'
import fetch from 'cross-fetch'
import {BaseUrl} from "../helpers/constants";

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

        return fetch(BaseUrl + '/api/hotelOverview')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveHotelOverview(json)))
    }
}

export function postHotelOverview(hotelDescription) {
    return dispatch => {
        return fetch(BaseUrl + '/api/hotelOverview',{
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

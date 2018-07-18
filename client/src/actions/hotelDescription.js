import 'babel-polyfill'
import fetch from 'cross-fetch'

export const REQUEST_HOTEL_DESCRIPTION = 'REQUEST_HOTEL_DESCRIPTION';
function requestHotelDescription() {
    return {
        type: REQUEST_HOTEL_DESCRIPTION,
        isFetching:true
    }
}

export const RECEIVE_HOTEL_DESCRIPTION = 'RECEIVE_HOTEL_DESCRIPTION'
function receiveHotelDescription(json) {

    return {
        type: RECEIVE_HOTEL_DESCRIPTION,
        isFetching:false,
        hotelDescription: json,
        receivedAt: Date.now()
    }
}

export function fetchHotelDescription() {
    return dispatch => {
        dispatch(requestHotelDescription());

        return fetch(`/api/hotelDescription`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveHotelDescription(json)))
    }
}

export function postHotelDescription(hotelDescription) {
    return dispatch => {
        return fetch(`/api/hotelDescription`,{
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
            .then(json => dispatch(receiveHotelDescription(json)))
    }
}

import {RECEIVE_HOTEL_RATES, REQUEST_HOTEL_RATES} from '../actions/hotelRates'

function hotelRates(state = {
                           hotelRates: {title:'', properties: [], url:''}
                       },
                       action) {
    switch (action.type) {
        case REQUEST_HOTEL_RATES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_HOTEL_RATES:
            return Object.assign({}, state, {
                isFetching: false,
                hotelRates: action.hotelRates
            })
        default:
            return state;
    }
}

export default hotelRates;
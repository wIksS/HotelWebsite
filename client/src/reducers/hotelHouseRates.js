import {RECEIVE_HOTEL_HOUSE_RATES, REQUEST_HOTEL_HOUSE_RATES} from '../actions/hotelHouseRates'

function hotelHouseRates(state = {
                           hotelHouseRates: {title:'', properties: [], url:'', description:''}
                       },
                       action) {
    switch (action.type) {
        case REQUEST_HOTEL_HOUSE_RATES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_HOTEL_HOUSE_RATES:
            return Object.assign({}, state, {
                isFetching: false,
                hotelHouseRates: action.hotelHouseRates
            })
        default:
            return state;
    }
}

export default hotelHouseRates;
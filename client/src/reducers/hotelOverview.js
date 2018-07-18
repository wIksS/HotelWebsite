import {REQUEST_HOTEL_OVERVIEW, RECEIVE_HOTEL_OVERVIEW} from '../actions/hotelOverview'

function hotelOverview(state = {
                           hotelOverview: {description:'', properties: []}
                       },
                       action) {
    switch (action.type) {
        case REQUEST_HOTEL_OVERVIEW:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_HOTEL_OVERVIEW:
            return Object.assign({}, state, {
                isFetching: false,
                hotelOverview: action.hotelOverview
            })
        default:
            return state;
    }
}

export default hotelOverview;
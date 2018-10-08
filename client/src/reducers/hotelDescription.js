import {REQUEST_HOTEL_DESCRIPTION, RECEIVE_HOTEL_DESCRIPTION} from '../actions/hotelDescription'

function hotelDescription(state = {
                              hotelDescription: {title:'', subTitle:'', description:''}
                          },
                          action) {
    switch (action.type) {
        case REQUEST_HOTEL_DESCRIPTION:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECEIVE_HOTEL_DESCRIPTION:
            return Object.assign({}, state, {
                isFetching: false,
                hotelDescription: action.hotelDescription
            })
        default:
            return state;
    }
}

export default hotelDescription;
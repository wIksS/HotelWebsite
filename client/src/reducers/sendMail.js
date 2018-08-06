import {RECEIVE_MAIL, REQUEST_MAIL} from '../actions/mailSend'
import moment from "moment/moment";

function mail(state = {
                  mail:{result:false}
              },
              action) {
    switch (action.type) {
        case REQUEST_MAIL:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_MAIL:
            return Object.assign({}, state, {
                isFetching: false,
                mail: action.mail
            })
        default:
            return state;
    }
}

export default mail;
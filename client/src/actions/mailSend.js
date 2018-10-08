import 'babel-polyfill'
import fetch from 'cross-fetch'
export const REQUEST_MAIL = 'REQUEST_MAIL';
function requestMail() {
    return {
        type: REQUEST_MAIL,
        mail: {},
        isFetching:true
    }
}

export const RECEIVE_MAIL = 'RECEIVE_MAIL'
function receiveMail(json) {
    return {
        type: RECEIVE_MAIL,
        isFetching:false,
        mail:json,
        receivedAt: Date.now()
    }
}

export function sendMail(mailData) {
    return dispatch => {
        dispatch(requestMail());

        return fetch(`http://185.80.1.67:8080/api/sendMail`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mailData)
        })
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveMail(json)))
    }
}


import React from 'react';
import {connect} from 'react-redux'
import HotelBook from "../components/HotelBook";
import {sendMail} from "../actions/mailSend";

const mapStateToProps = (state, ownProps) => {
    return {
        hotelRates: state.hotelRates.hotelRates,
        hotelHouseRates: state.hotelHouseRates.hotelHouseRates,
        mail: state.mail.mail
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (bookData) => {
            let newBookData = Object.assign({}, bookData);
            newBookData.arriveDate = bookData.arriveDate.format('DD/MM/YYYY');
            newBookData.departureDate = bookData.departureDate.format('DD/MM/YYYY');

            dispatch(sendMail(newBookData))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelBook)
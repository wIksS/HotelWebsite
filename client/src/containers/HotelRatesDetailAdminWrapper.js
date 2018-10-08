import React from 'react';
import { connect } from 'react-redux'
import {addHotelRates, deleteHotelRates, postHotelRates} from "../actions/hotelRates";
import HotelRateDetailAdmin from "../components/HotelRateDetailAdmin";

const mapStateToProps = (state, ownProps) => {
    return {
        hotelRates: state.hotelRates.hotelRates
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (hotelRates) => {
            dispatch(postHotelRates(hotelRates))
        },
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelRateDetailAdmin)
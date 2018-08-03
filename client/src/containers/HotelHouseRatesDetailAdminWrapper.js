import React from 'react';
import { connect } from 'react-redux'
import {postHotelHouseRates} from "../actions/hotelHouseRates";
import HotelRateDetailAdmin from "../components/HotelRateDetailAdmin";

const mapStateToProps = (state, ownProps) => {
    return {
        hotelRates: state.hotelHouseRates.hotelHouseRates
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (hotelRates) => {
            dispatch(postHotelHouseRates(hotelRates))
        },
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelRateDetailAdmin)
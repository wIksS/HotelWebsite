import React from 'react';
import { connect } from 'react-redux'
import HotelRateDetail from "../components/HotelRateDetail";

const mapStateToProps = (state, ownProps) => {
    return {
        hotelRates: state.hotelHouseRates.hotelHouseRates,
    }
}

export default connect(
    mapStateToProps
)(HotelRateDetail)
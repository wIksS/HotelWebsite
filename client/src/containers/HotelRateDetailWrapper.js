import React from 'react';
import { connect } from 'react-redux'
import HotelRateDetail from "../components/HotelRateDetail";

const mapStateToProps = (state, ownProps) => {
    return {
        hotelRates: state.hotelRates.hotelRates,
    }
}

export default connect(
    mapStateToProps
)(HotelRateDetail)
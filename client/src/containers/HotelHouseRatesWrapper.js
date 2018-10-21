import React from 'react';
import { connect } from 'react-redux'
import HotelRates from "../components/HotelRates";

const mapStateToProps = (state, ownProps) => {
    return {
        hotelRates: state.hotelHouseRates.hotelHouseRates,
        detailsUrl:'hotel-house-rates.html#/details-house'
    }
}

export default connect(
    mapStateToProps
)(HotelRates)
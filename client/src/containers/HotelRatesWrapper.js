import React from 'react';
import { connect } from 'react-redux'
import HotelRates from "../components/HotelRates";

const mapStateToProps = (state, ownProps) => {
    return {
        hotelRates: state.hotelRates.hotelRates,
        detailsUrl:'hotel-rooms-rates.html#/details'
    }
}

export default connect(
    mapStateToProps
)(HotelRates)
import React from 'react';
import { connect } from 'react-redux'
import HotelBook from "../components/HotelBook";

const mapStateToProps = (state, ownProps) => {
    return {
        hotelRates: state.hotelRates.hotelRates,
        hotelHouseRates: state.hotelHouseRates.hotelHouseRates
    }
}

export default connect(
    mapStateToProps
)(HotelBook)
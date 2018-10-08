import React from 'react';
import { connect } from 'react-redux'
import {addHotelHouseRates, deleteHotelHouseRates, postHotelHouseRates} from "../actions/hotelHouseRates";
import HotelRatesAdmin from "../components/HotelRatesAdmin";


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
        onAddRate: (hotelRates) => {
            dispatch(addHotelHouseRates(hotelRates))
        },
        onDeleteRate: (hotelRates) => {
            dispatch(deleteHotelHouseRates(hotelRates))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelRatesAdmin)
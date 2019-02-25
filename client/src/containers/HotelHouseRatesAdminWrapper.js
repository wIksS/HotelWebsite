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
            hotelRates = updateImages(hotelRates);
            dispatch(postHotelHouseRates(hotelRates))
        },
        onAddRate: (hotelRates) => {
            hotelRates = updateImages(hotelRates);
            dispatch(addHotelHouseRates(hotelRates))
        },
        onDeleteRate: (hotelRates) => {
            hotelRates = updateImages(hotelRates);
            dispatch(deleteHotelHouseRates(hotelRates))
        }
    }
}
function updateImages(hotelRates) {
    hotelRates.images = hotelRates.images || [""];
    hotelRates.images[0] = hotelRates.url;
    return hotelRates;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelRatesAdmin)
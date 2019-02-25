import React from 'react';
import { connect } from 'react-redux'
import {addHotelRates, deleteHotelRates, postHotelRates} from "../actions/hotelRates";
import HotelRatesAdmin from "../components/HotelRatesAdmin";

function HotelRatesAdminWrapper({hotelOverview}) {

    return (
        <HotelRatesAdmin props={hotelOverview}/>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        hotelRates: state.hotelRates.hotelRates
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (hotelRates) => {
            hotelRates = updateImages(hotelRates);
            dispatch(postHotelRates(hotelRates))
        },
        onAddRate: (hotelRates) => {
            hotelRates = updateImages(hotelRates);
            dispatch(addHotelRates(hotelRates))
        },
        onDeleteRate: (hotelRates) => {
            hotelRates = updateImages(hotelRates);
            dispatch(deleteHotelRates(hotelRates))
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
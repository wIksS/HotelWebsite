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
            dispatch(postHotelRates(hotelRates))
        },
        onAddRate: (hotelRates) => {
            dispatch(addHotelRates(hotelRates))
        },
        onDeleteRate: (hotelRates) => {
            dispatch(deleteHotelRates(hotelRates))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelRatesAdmin)
import React from 'react';
import { connect } from 'react-redux'
import {postHotelRates} from "../actions/hotelRates";
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
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelRatesAdmin)
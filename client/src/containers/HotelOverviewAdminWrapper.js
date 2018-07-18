import React from 'react';
import { connect } from 'react-redux'
import {postHotelOverview} from "../actions/hotelOverview";
import HotelOverviewAdmin from "../components/HotelOverviewAdmin";

function HotelDescriptionAdminWrapper({hotelOverview}) {

    return (
        <HotelOverviewAdmin props={hotelOverview}/>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        hotelOverview: state.hotelOverview.hotelOverview
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (hotelOverview) => {
            dispatch(postHotelOverview(hotelOverview))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelOverviewAdmin)
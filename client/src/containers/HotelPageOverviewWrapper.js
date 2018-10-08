import React from 'react';
import {connect} from 'react-redux'
import HotelOverview from "../components/HotelOverview";

function HotelOverviewWrapper({hotelOverview}) {

    return (
        <HotelOverview props={hotelOverview}/>
    )
}

const mapStateToProps = (state, ownProps) => {

    return {
        hotelOverview: state.hotelOverview.hotelOverview,
        expanded:true
    }
}

export default connect(
    mapStateToProps
)(HotelOverview)
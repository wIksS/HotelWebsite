import React from 'react';
import {connect} from 'react-redux'
import HotelOverviewNav from "../components/HotelOverviewNav";

function HotelOverviewNavWrapper({HotelOverviewNav}) {

    return (
        <HotelOverviewNav props={HotelOverviewNav}/>
    )
}

const mapStateToProps = (state, ownProps) => {

    return {
        hotelOverviewNav: state.HotelOverviewNav.hotelOverviewNav,
        expanded:false
    }
}

export default connect(
    mapStateToProps
)(HotelOverviewNav)
import React from 'react';
import { connect } from 'react-redux'
import HotelDescription from "../components/HotelDescription";

function HotelDescriptionWrapper({hotelDescription}) {

    return (
        <HotelDescription props={hotelDescription}/>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        hotelDescription: state.hotelDescription.hotelDescription
    }
}



export default connect(
    mapStateToProps
)(HotelDescription)
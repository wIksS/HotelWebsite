import React from 'react';
import { connect } from 'react-redux'
import {postHotelDescription} from "../actions/hotelDescription";
import HotelDescriptionAdmin from "../components/HotelDescriptionAdmin";

function HotelDescriptionAdminWrapper({hotelDescription, onClick}) {

    return (
        <HotelDescriptionAdmin props={hotelDescription}/>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        hotelDescription: state.hotelDescription.hotelDescription
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (hotelDescription) => {
            dispatch(postHotelDescription(hotelDescription))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelDescriptionAdmin)
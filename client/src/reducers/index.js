import {combineReducers} from 'redux'
import hotelOverview from "./hotelOverview";
import hotelDescription from "./hotelDescription";
import hotelRates from "./hotelRates";
import hotelHouseRates from "./hotelHouseRates";

export default combineReducers({
    hotelDescription,
    hotelOverview,
    hotelRates,
    hotelHouseRates
})

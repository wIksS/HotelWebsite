import {combineReducers} from 'redux'
import hotelOverview from "./hotelOverview";
import hotelDescription from "./hotelDescription";
import hotelRates from "./hotelRates";

export default combineReducers({
    hotelDescription,
    hotelOverview,
    hotelRates
})

import {combineReducers} from 'redux'
import hotelOverview from "./hotelOverview";
import hotelDescription from "./hotelDescription";

export default combineReducers({
    hotelDescription,
    hotelOverview
})

import React from 'react'
import {render} from 'react-dom'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import app from './reducers'
import registerServiceWorker from './registerServiceWorker';
import {fetchHotelDescription} from './actions/hotelDescription'
import {fetchHotelOverview} from './actions/hotelOverview'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route, HashRouter} from 'react-router-dom'
import HotelDescriptionAdminWrapper from "./containers/HotelDescriptionAdminWrapper";
import HotelDescriptionWrapper from "./containers/HotelDescriptionWrapper";
import HotelOverviewAdminWrapper from "./containers/HotelOverviewAdminWrapper";
import HotelOverviewWrapper from "./containers/HotelOverviewWrapper";
import HotelRatesWrapper from "./containers/HotelRatesWrapper";
import HotelRatesAdminWrapper from "./containers/HotelRatesAdminWrapper";
import {fetchHotelRates} from "./actions/hotelRates";

const loggerMiddleware = createLogger()

const store = createStore(app,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))

store.dispatch(fetchHotelDescription());
store.dispatch(fetchHotelOverview());
store.dispatch(fetchHotelRates());

if (document.getElementById('hotel-description')) {
    render(
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path='/administration' component={HotelDescriptionAdminWrapper}/>
                    <Route path='/' component={HotelDescriptionWrapper}/>
                </Switch>
            </HashRouter>
        </Provider>,
        document.getElementById('hotel-description')
    )
}

if (document.getElementById('hotel-rates')) {
    render(
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path='/administration' component={HotelRatesAdminWrapper}/>
                    <Route path='/' component={HotelRatesWrapper}/>
                </Switch>
            </HashRouter>
        </Provider>,
        document.getElementById('hotel-rates')
    )
}

if (document.getElementById('hotel-overview')) {
    render(
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path='/administration' component={HotelOverviewAdminWrapper}/>
                    <Route path='/' component={HotelOverviewWrapper}/>
                </Switch>
            </HashRouter>
        </Provider>,
        document.getElementById('hotel-overview')
    )
}


if (document.getElementById('about-hotel')) {
    render(
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path='/administration' component={HotelOverviewAdminWrapper}/>
                    <Route path='/' component={HotelOverviewWrapper}/>
                </Switch>
            </HashRouter>
        </Provider>,
        document.getElementById('about-hotel')
    )
}

registerServiceWorker();

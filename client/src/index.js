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
import {Switch, Route, HashRouter} from 'react-router-dom'
import HotelDescriptionAdminWrapper from "./containers/HotelDescriptionAdminWrapper";
import HotelDescriptionWrapper from "./containers/HotelDescriptionWrapper";
import HotelOverviewAdminWrapper from "./containers/HotelOverviewAdminWrapper";
import HotelOverviewWrapper from "./containers/HotelOverviewWrapper";
import HotelRatesWrapper from "./containers/HotelRatesWrapper";
import HotelRatesAdminWrapper from "./containers/HotelRatesAdminWrapper";
import {fetchHotelRates} from "./actions/hotelRates";
import HotelRateDetailWrapper from "./containers/HotelRateDetailWrapper";
import {fetchHotelHouseRates} from "./actions/hotelHouseRates";
import HotelHouseRatesWrapper from "./containers/HotelHouseRatesWrapper";
import HotelHouseRatesAdminWrapper from "./containers/HotelHouseRatesAdminWrapper";
import HotelHouseRateDetailWrapper from "./containers/HotelHouseRateDetailWrapper";
import HotelHouseRatesDetailAdminWrapper from "./containers/HotelHouseRatesDetailAdminWrapper";
import HotelBookWrapper from "./containers/HotelBookWrapper";
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const loggerMiddleware = createLogger()

const store = createStore(app,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))

store.dispatch(fetchHotelDescription());
store.dispatch(fetchHotelOverview());
store.dispatch(fetchHotelRates());
store.dispatch(fetchHotelHouseRates());

const options = {
    position: 'bottom right',
    timeout: 5000,
    offset: '30px',
    transition: 'scale',
    zIndex:100000
}

window.addEventListener('load', () => {

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

    if (document.getElementById('hotel-house-rates')) {
        render(
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path='/administration' component={HotelHouseRatesAdminWrapper}/>
                        <Route path='/details-house/:id/administration' component={HotelHouseRatesDetailAdminWrapper}/>
                        <Route path='/details-house/:id' component={HotelHouseRateDetailWrapper}/>
                        <Route path='/' component={HotelHouseRatesWrapper}/>
                    </Switch>
                </HashRouter>
            </Provider>,
            document.getElementById('hotel-house-rates')
        )
    }

    if (document.getElementById('hotel-rates')) {
        render(
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path='/administration' component={HotelRatesAdminWrapper}/>
                        <Route path='/details/:id/administration' component={HotelHouseRatesDetailAdminWrapper}/>
                        <Route path='/details/:id' component={HotelRateDetailWrapper}/>
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

    if (document.getElementById('hotel-book')) {
        render(
            <AlertProvider template={AlertTemplate} {...options}>
                <Provider store={store}>
                    <HashRouter>
                        <Switch>
                            <Route path='/' component={HotelBookWrapper}/>
                        </Switch>
                    </HashRouter>
                </Provider>
            </AlertProvider>,
            document.getElementById('hotel-book')
        )
    }
}, false);

registerServiceWorker();

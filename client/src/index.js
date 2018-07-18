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
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HotelDescriptionAdminWrapper from "./containers/HotelDescriptionAdminWrapper";
import HotelDescriptionWrapper from "./containers/HotelDescriptionWrapper";
import HotelOverviewAdminWrapper from "./containers/HotelOverviewAdminWrapper";
import HotelOverviewWrapper from "./containers/HotelOverviewWrapper";

const loggerMiddleware = createLogger()

const store = createStore(app,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))

store.dispatch(fetchHotelDescription());
store.dispatch(fetchHotelOverview());

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/administration' component={HotelDescriptionAdminWrapper}/>
                <Route path='/' component={HotelDescriptionWrapper}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('hotel-description')
)


render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/administration' component={HotelOverviewAdminWrapper}/>
                <Route path='/' component={HotelOverviewWrapper}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('hotel-overview')
)


if (document.getElementById('about-hotel')) {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/administration' component={HotelOverviewAdminWrapper}/>
                    <Route component={HotelOverviewWrapper}/>
                </Switch>
            </BrowserRouter>
        </Provider>,
        document.getElementById('about-hotel')
    )
}

registerServiceWorker();

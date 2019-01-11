import {Redirect, Route} from 'react-router-dom'
import React, {Component} from 'react';
import Authentication from "./Authentication";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Authentication(props) === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)
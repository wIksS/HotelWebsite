import {Route} from 'react-router-dom'


export default HashRoutes = ({ component: Component, path, ...routeProps }) => (
    <Route
        {...routeProps}
        component={({ location, ...props }) =>
            location.hash === path && <Component {...props} />
        }
    />
)
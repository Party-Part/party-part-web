import React from 'react';
import {Route} from 'react-router-dom';
import {useAuth} from "./Auth";
import Redirect from "react-router-dom/es/Redirect";

function PrivateRoute({component: Component, ...rest}) {
    const isAuthenticated = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/sign-in"/>
                )
            }
        />
    );
}

export default PrivateRoute;
import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../Providers/UserProvider';

export function PrivateRoute({component: Component, ...rest}) {
    const userState = useContext(UserContext);
    return (
        <Route {...rest} render={(props) => (
            !!userState.user
            ? <Component {...props} />
            : <Redirect to='/auth' />
        )} />
    );
}


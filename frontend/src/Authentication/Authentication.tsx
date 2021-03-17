import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';
import { Redirect } from 'react-router-dom';

export function Authentication(props) {
    const userState = useContext(UserContext);
    return (
        <>
            {!!!userState.user 
             ? <Redirect to='/signup' />
             : <Redirect to='/' />
            }
        </>
    );
}

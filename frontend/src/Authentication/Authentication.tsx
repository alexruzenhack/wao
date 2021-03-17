import React, { useContext } from 'react';
import { UserContext } from '../Providers/UserProvider';
import { NewUser } from '../User/NewUser';
import { Redirect } from 'react-router-dom';

export function Authentication(props) {
    const userState = useContext(UserContext);
    return (
        <>
            {!!!userState.user 
             ? <NewUser />
             : <Redirect to='/' />
            }
        </>
    );
}

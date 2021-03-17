import React, { createContext, useCallback, useState } from 'react';

/**
 * @typedef {Object} User
 * @property {String} id - unique identification.
 * @property {String} name
 * @property {String} email
 */

export const UserContext = createContext({
    /** @type {User} */
    user: null,
    identifyUser: (user) => {}
});

export function UserProvider(props) {
    let [user, setUser] = useState(null);
    const identifyUser = useCallback((currentUser) => {
        if (!user) {
            setUser(currentUser);
        }
    }, [user, setUser]);

    let state = {user, identifyUser};
    let { children } = props;
    return (
        <UserContext.Provider value={state}>{children}</UserContext.Provider>
    );
}

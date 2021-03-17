import React, { createContext, useCallback, useState } from 'react';

export const UserContext = createContext({ user: null, identifyUser: (user) => {} });

export function UserProvider(props) {
    let [user, setUser] = useState(null);
    const identifyUser = useCallback((currentUser) => {
        if (!user) {
            console.log('logged');
            setUser(currentUser);
        }
    }, [user, setUser]);

    let state = {user, identifyUser};
    let { children } = props;
    return (
        <UserContext.Provider value={state}>{children}</UserContext.Provider>
    );
}

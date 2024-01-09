/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from 'react';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const user = {displayName : 'sagor nodi'}
    return (
        <AuthContext.Provider value={user}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
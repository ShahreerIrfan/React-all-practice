/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
const AuthContext = useContext(null)

const AuthProvider = () => {
    const user = {displayName : 'sagor nodi'}
    return (
        <AuthContext.Provider value={user}>


        </AuthContext.Provider>
    );
};

export default AuthProvider;
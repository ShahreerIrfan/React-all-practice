/* eslint-disable react/prop-types */
import React, { Children, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location)
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return(
            <div><h3>Loading.....</h3></div>
        )
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
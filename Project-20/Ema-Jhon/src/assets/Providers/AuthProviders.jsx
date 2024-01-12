/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.config';
const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const [user,setUser] = useState(null)


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        singIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
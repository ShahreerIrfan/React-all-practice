/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.config';
const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const singIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        signOut(auth)
    }
    // Observer user auth state

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        // Stop observing while unmounting
        return () =>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        loading,
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
//      

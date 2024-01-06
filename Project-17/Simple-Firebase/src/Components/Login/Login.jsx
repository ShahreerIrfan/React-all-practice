/* eslint-disable no-unused-vars */
import React from 'react';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        console.log("Cliced");
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;


//
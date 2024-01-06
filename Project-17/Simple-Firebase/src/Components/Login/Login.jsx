/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    // console.log(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((resutl) => {
                const loggedInUser = resutl.user;
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch((error) => {
                console.log('Error', error.messase)
            })
    }


    const handleSignOut = () => [
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    ]

    return (
        <div>
            {
                user ?
                <button onClick={handleSignOut}>SignOUt</button> :
                <button onClick={handleGoogleSignIn}>Google Login</button> 
                
            }
            {
                user && <div>
                    <h2>Name: {user.displayName}</h2>
                    <h2>Email: {user.email}</h2>
                    <img src={user.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default Login;



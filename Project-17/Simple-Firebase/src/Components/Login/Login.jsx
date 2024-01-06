/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GithubAuthProvider } from "firebase/auth";



const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    // console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((resutl) => {
                const loggedInUser = resutl.user;
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch((error) => {
                console.log('Error', error.messase)
            })
    }

    const handleGitLogin = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch((error) => {
                console.log('Error', error.message);
            });
    };


    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            {
                user ?
                    <button onClick={handleSignOut}>SignOUt</button> :
                    <div>
                        <button onClick={handleGoogleSignIn}>Google Login</button>
                        <button onClick={handleGitLogin}>GithubLogin</button>
                    </div>

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


//   
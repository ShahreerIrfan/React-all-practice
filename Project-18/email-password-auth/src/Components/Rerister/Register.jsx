/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../FireBase/FireBase.Config';

const auth = getAuth(app);

const Register = () => {
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleEmailChange = (event) => {
        // console.log(event.target.value)
        SetEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        console.log(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value
        console.log(email)
        console.log(password)
        createUserWithEmailAndPassword(auth,email,password)
        .then(resutl=>{
            const loggedUser = resutl.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className='form-group'>
            <h2>This is register</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Enter your E-mail' />
                <br />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Enter your password' />
                <br />
                <br />
                <input className='btn btn-primary form-control' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../FireBase/FireBase.Config';

const auth = getAuth(app);

const Register = () => {
    const [error,setError] = useState('');
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('')
    const [success,setSuccess] = useState('')



    const handleEmailChange = (event) => {
        // console.log(event.target.value)
        SetEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        console.log(event.target.value)
    }


    const handleSubmit = (event) => {
        
        event.preventDefault();
        setError('')
        const email = event.target.email.value;
        const password = event.target.password.value;
        // Validition cheking
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Atleast one upeer case')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 character')
            return;
        }
    
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                event.target.reset()
                setSuccess('User created successfully');
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message)
                setSuccess('')
            });
    }

    return (
        <div className='form-group'>
            <h2>This is register</h2>
            <form onSubmit={handleSubmit}>
                <input required onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Enter your E-mail' />
                <br />
                <br />
                <input required onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Enter your password' />
                <br />
                <br />
                
                <input className='btn btn-primary form-control' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            
        </div>
    );
};

export default Register;

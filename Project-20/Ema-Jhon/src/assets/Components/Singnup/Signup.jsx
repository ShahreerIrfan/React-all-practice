/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Singup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [error,setError] = useState('')
    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm)
        if(password!=confirm){
            setError(' Password and Confirm Password do not match. Please make sure both fields contain the same information.')
            return;
        }
        else if(password.length>6){
            setError('Password length must be ')
        }
        
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Signup</h3>
            <form onSubmit={handleSignUp} action="">
                <div className="form-contron">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-contron">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-contron">
                    <label htmlFor="confirm">Confirm password</label>
                    <input type="password" name='confirm' required />
                </div>
                <div className="form-contron">
                    <button className='login-btn'>Login</button>
                </div>
                <div className="form-contron">
                    <p>Already have an acoount?<span ><Link className='txt-orange' to='/login'>Login</Link></span></p>
                    <p className='txt-red'>{error}</p>
                </div>
                
            </form>
        </div>
    );
};

export default Signup;
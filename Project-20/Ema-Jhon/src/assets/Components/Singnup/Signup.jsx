/* eslint-disable no-unused-vars */
import React from 'react';
import './Singup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form action="">
                <div className="form-contron">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-contron">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-contron">
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-contron">
                    <button className='login-btn'>Login</button>
                </div>
                <div className="form-contron">
                    <p>Already have an acoount?<span ><Link className='txt-orange' to='/login'>Login</Link></span></p>
                </div>
                
            </form>
        </div>
    );
};

export default Signup;
/* eslint-disable no-unused-vars */
import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h3 className='form-title'>This is login page</h3>
            <form action="">
                <div className="form-contron">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' required />
                </div>
            </form>
        </div>
    );
};

export default Login;
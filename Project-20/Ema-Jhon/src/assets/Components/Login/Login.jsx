/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    
    const {singIn} = useContext(AuthContext)
    const [error,setError] = useState('');

    const navigate = useNavigate()

    const loaction = useLocation()
    console.log(loaction)

    const from = loaction.state?.from?.pathname || '/';

    const handleLogin = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length<6){
            setError('Password length less than 6 character')
            return;
        }

        singIn(email,password)
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace:true})
        })
        .catch((error)=>{
            setError(error);
        });
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handleLogin} action="">
                <div className="form-contron">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-contron">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-contron">
                    <button className='login-btn'>Login</button>
                </div>
                <div className="form-contron">
                    <p>New to Ema-john?<span ><Link className='txt-orange' to='/signup'>Create New Account</Link></span></p>
                </div>
                
            </form>
        </div>
    );
};

export default Login;
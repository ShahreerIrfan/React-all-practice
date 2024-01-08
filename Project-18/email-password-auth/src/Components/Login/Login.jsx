/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Login = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // Validation
        setError('')
        setSuccess('')
        if(!/^[A-Z]{2}$/.test(password)){
            setError('Enter at least 2 upper case')
            return;
        }
        else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}/[\]:;<>,.?~\\/-]).+$/.test(password)){
            setError('Add a special character')
            return;
        }
    };

    return (
        <div>
            <h2>This is login</h2>
            <div>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input required name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input required name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p className='text-warning'>{error}</p>
            </div>
        </div>
    );
};

export default Login;

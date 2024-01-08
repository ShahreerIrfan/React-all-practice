/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import app from '../../FireBase/FireBase.Config';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const auth = getAuth(app);

    const emailRef = useRef()

    


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value
        console.log(email, password,name);
        // Validation
        setError('')
        setSuccess('')
        signInWithEmailAndPassword(auth,email,password)
        .then(resutl=>{
            const loggedUser = resutl.user;
            setSuccess('Logged in successfully')
            setError('')
            event.target.reset()
            sendverificationEmail(loggedUser)
            console.log(loggedUser)
        })
        .catch(error=>{
            setError(error.message)
        })

        const sendverificationEmail = (user) =>{
            sendEmailVerification(user)
            .then(resutl=>{
                console.log(resutl)
                alert('Please verify your email')
            })
        }


        

    };
    const handleResetPassword = (event) =>{
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        if(!email){
            alert('Please enter your email to rest password')
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('Please check your email')
        })
        .catch((error)=>{
            setError(error.message)
        })
    }


    return (
        <div>
            <h2>This is login</h2>
            <div>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input ref={emailRef} required name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input ref={emailRef} required name='name' type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input required name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p className='text-warning'>{error}</p>
                <p className='text-success'>{success}</p>
                <p><small>New to this website ? <Link to="/register">Register</Link></small></p>
                <p><small>Forget password? please <button onClick={handleResetPassword} className='btn btn-link'>reset password</button> </small></p>
            </div>
        </div>
    );
};

export default Login;

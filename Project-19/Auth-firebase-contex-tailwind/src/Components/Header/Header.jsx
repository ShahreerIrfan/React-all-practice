/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">Auth Master</button>
                <Link className='btn btn-ghost normal-case text-xl' to='/'>Home</Link>
                <Link className="btn btn-ghost text-xl"  to='/login'>Login</Link>
                <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;
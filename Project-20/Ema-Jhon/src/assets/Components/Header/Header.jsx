/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <nav className='Header'>
            
            
            <Link to="/"><img src={logo} alt="" /></Link>
            
            <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/invertory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <p style={{display:'inline',marginLeft:'5px',color:'#fff'}}>{user.displayName}</p>
            </div>
        </nav>
    );
};

export default Header;

// ......
/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            
            <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/invertory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {logOut,user} = useContext(AuthContext)
    const handleLogout =()=>{
        logOut();
        console.log('Logged Out')
    }
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
            <Link onClick={handleLogout}>Logout</Link>
            {
                user && <p>{user.email}</p>
            }
            
            </div>
        </nav>
    );
};

export default Header;



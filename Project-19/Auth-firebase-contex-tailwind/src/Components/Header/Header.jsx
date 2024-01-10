/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



const Header = () => {
    const {user,logout} = useContext(AuthContext)
    const handleLogOut = () =>{
        logout()
        .then(()=>{

        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">Auth Master</button>
                <Link className='btn btn-ghost normal-case text-xl' to='/'>Home</Link>
                <Link className='btn btn-ghost normal-case text-xl' to='/orders'>Orders</Link>
                
                {
                    user ? <span><Link className='btn btn-ghost normal-case text-xl' to='/profile'>Profile</Link></span> : <span className='btn btn-ghost normal-case text-xl'><Link to='/register'>Register</Link></span>
                }
                
                {
                    user ? <span>{user.email}<button onClick={handleLogOut} className="btn btn-xs ml-3">Sing-Out</button></span>:<Link  to='/login'> <span><button className="btn btn-xs ml-3">Sing-In</button></span></Link>
                }
            </div>
        </div>
    );
};

export default Header;
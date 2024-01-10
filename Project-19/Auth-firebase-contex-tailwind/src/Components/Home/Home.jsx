/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <h3 className=' text-sky-800'>This is home {user && <span>{user.displayName}</span> }</h3>
        </div>
    );
};

export default Home;

// ...
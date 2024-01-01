/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Friends.css"
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,email,phone,id} = friend
    return (
        <div className='friends-info'>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Phoen: {phone}</h3>
            <h3>Id: {id}</h3>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            <h2>Phone name {phone.name}</h2>
            
        </div>
    );
};

export default Phone;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';


const Link = ({route}) => {
    return (
        <li className='mr-10 hover:bg-purple-800'>
            
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;
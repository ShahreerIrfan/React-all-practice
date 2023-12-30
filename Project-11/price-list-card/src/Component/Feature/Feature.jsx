/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BeakerIcon, Bars3Icon,XMarkIcon,CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='h-4 w-4 text-purple-800'></CheckCircleIcon>
            <span className='pl-2 mt-1 mb-1'>{feature}</span>
        </div>
    );
};

export default Feature;
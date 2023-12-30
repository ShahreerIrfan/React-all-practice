/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-300 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h3 className='text-2xl text-center'>{price.membershipType}</h3>
            <h2 className='font-bold text-amber-900 underline'>Feature: </h2>
            {
                price.features.map((feature,idx)=> <Feature
                    key = {idx}
                    feature = {feature}
                ></Feature>)
            }
            <button className='w-full bg-green-700 py-2 rounded-md text-white font-bold mt-auto  hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

export default PriceCard;
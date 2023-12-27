/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './cosmetics.css'
import { addTodb,removeFromDB } from '../Utilities/fakedb';

const Cosmetic = (props) => {
    
    const {name,price,id} = props.cosmetic


    // const addToCartWithParam = () => addTodb(id);

     return (
        <div className='cosmetic'>
            
            <h2>Buy this: {name}</h2>
            <p>Price is: {price}</p>
            <h5>Key: {id} </h5>
            {/* <button className='btn btn-success' onClick={addToCartWithParam}>Add to cart</button> */}

            <button className='btn btn-warning' onClick={()=>addTodb(id)}>Add to cart </button>
            <button className='btn btn-danger' onClick={()=>removeFromDB(id)}>Remove cart</button>
        </div>
    );
};

export default Cosmetic;
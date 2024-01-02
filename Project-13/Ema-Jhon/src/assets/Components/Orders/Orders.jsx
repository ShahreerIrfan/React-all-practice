/* eslint-disable no-unused-vars */
import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h2>Orders page {cart.length}</h2>
            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
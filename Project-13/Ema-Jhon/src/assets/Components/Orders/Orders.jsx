/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import ReviewItem from '../ReviewItem/ReviewItem';

import "./Order.css"
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {
    
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart)
    // console.log(savedCart)
    const handleRemoveFromCart = (id)=>{
        const remaining = cart.filter(product=>product.id!=id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart();

    }

    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product=><ReviewItem
                    
                    key={product.id}
                    product={product}
                    handleRemoveFromCart = {handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart'>
                <Cart cart={cart}
                    handleClearCart = {handleClearCart}
                ><Link to="/checkout"><button className='btn-proceed'>Proceed Checkout</button></Link></Cart>
            </div>
        </div>
    );
};

export default Orders;
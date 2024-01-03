/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Cart = ({cart,handleClearCart,children}) => {
    
    
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    // if (!Array.isArray(cart)) {
    //     console.error('Cart is not an array:', cart);
    //     return null; 
    // }

    for(const product of cart){
        product.quantity = product.quantity || 1
        total = total + product.price * product.quantity;
        totalShipping += product.shipping
        quantity += product.quantity
    }
    let tax = total*7/100;
    let grandTotal = total+totalShipping+tax

    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selecte items: {quantity}</p>
            <p>Total price: {total}</p>
            <p>Total Shipping {totalShipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span >Clear Cart</span> 
            <FontAwesomeIcon icon={faTrashAlt}/> 
            </button>
            {children}
            
        </div>
    );
};

export default Cart;

// sss
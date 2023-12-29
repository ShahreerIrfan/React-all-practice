/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

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
        </div>
    );
};

export default Cart;

// sss
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some product</p>
    }
    else {
        message =
            <div><h3>Boroloxx</h3>
                <p>Thanks for giving your money</p>
            </div>
    }
    return (

        <div>
            {message}
            {cart.length>2?<span className=''>Aro kino</span>:<span>Fokira</span>}
            <h3 className={cart.length>2?'red':'yellow'}>Order Summary  {cart.length}</h3>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;